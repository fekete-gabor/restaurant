import { Navbar, Sidebar, Footer, CreatedBy, ScrollTop } from "../components";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getGalleryImages } from "../features/gallery/gallerySlice";
import { isModalClose } from "../features/modal/modalSlice";
import { getContacts } from "../features/contacts/contactsSlice";
import { getMenuItems, getMenuSlides } from "../features/menu/menuSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useLocation } from "react-router-dom";

const SharedLayout = () => {
  const { isModal } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getContacts());
    dispatch(getMenuItems());
    dispatch(getMenuSlides());
    dispatch(getGalleryImages());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isModal) dispatch(isModalClose());
    // eslint-disable-next-line
  }, [location]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
      <ScrollTop />
      <CreatedBy />
    </>
  );
};

export default SharedLayout;

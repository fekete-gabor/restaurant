import styled from "styled-components";
import { links } from "../utils/navLinks";
import { NavLink } from "react-router-dom";
import { sidebarClose } from "../features/sidebar/sidebarSlice";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper className="sidebar">
      <div>
        <ul className="link-container">
          {links.map((link) => {
            const { text, url, id } = link;
            return (
              <li key={id} onClick={() => dispatch(sidebarClose())}>
                <NavLink
                  to={url}
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  text-align: center;
  align-items: center;
  padding: 0rem 2rem;
  background: var(--primary-clr-4);
  border: solid 2px var(--primary-white);
  position: fixed;
  top: 0;
  z-index: 998;

  .link {
    padding: 1rem 0.5rem;
    color: var(--primary-white);
    text-transform: capitalize;
    font-size: clamp(1rem, 10vw, 2.5rem);
    letter-spacing: 1px;
    transition: var(--transition);
    &:hover {
      color: #fc3;
    }
  }

  .active {
    padding: 1rem 0.5rem;
    color: var(--primary-clr-3);
  }
`;

export default Sidebar;

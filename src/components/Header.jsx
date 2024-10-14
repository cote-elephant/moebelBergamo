import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/Category">Category</NavLink>
          </li>
          <li>
            <NavLink to="/Product">Product</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
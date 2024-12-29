import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <>
      <NavLink className="mx-1" to="/">
        Home
      </NavLink>
      <NavLink className="mx-1" to="/products">
        Products
      </NavLink>
      <NavLink className="mx-1" to="/users">
        Users
      </NavLink>
      <NavLink className="mx-1" to="/todos">
        Todos
      </NavLink>
      <NavLink className="mx-1" to="/series">
        Top Series
      </NavLink>
    </>
  );
};

export default Navbar;

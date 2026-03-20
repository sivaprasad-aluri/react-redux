import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../app/routePaths";
import "./components.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={ROUTE_PATHS.HOME}>Home</Link>
      <Link to={ROUTE_PATHS.REDUX}>Redux</Link>
      <Link to={ROUTE_PATHS.ABOUT}>About</Link>
    </nav>
  );
};

export default Navbar;

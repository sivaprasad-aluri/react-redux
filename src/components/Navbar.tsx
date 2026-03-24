import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../app/routePaths";
import "./components.css";
import { Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        className="logo"
      >
        Siva
      </Typography>
      <Box
        sx={{ width: "80%" }}
        display="flex"
        justifyContent="flex-end"
        gap={4}
        pr={5}
      >
        <Box>
          <Link to={ROUTE_PATHS.HOME}>Home</Link>
          <Link to={ROUTE_PATHS.REDUX}>Redux</Link>
          <Link to={ROUTE_PATHS.ABOUT}>About</Link>
        </Box>
      </Box>
    </nav>
  );
};

export default Navbar;

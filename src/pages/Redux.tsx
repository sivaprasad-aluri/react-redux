import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Redux = () => {
  return (
    <Box className="page">
      <section className="redux-navbar">
        <aside className="redux-side-nav">
          <nav className="redux-nav">
            <ul>
              <li>
                <Link to="/redux">Counter</Link>
              </li>
              <li>
                <Link to="/redux/todo">Todo</Link>
              </li>
              <li>
                <Link to="/redux/users">Users</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <Box className="redux-content">
          <Outlet />
        </Box>
      </section>
    </Box>
  );
};

export default Redux;

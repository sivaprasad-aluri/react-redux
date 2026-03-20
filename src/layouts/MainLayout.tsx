import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

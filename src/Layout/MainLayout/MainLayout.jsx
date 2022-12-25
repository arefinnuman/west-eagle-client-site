import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import NavBar from "../../Pages/Shared/Navbar/NavBar";

const MainLayout = () => {
  return (
    <React.Fragment>
      <div className="max-w-[1440px] mx-auto">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default MainLayout;

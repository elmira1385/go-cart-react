import React from "react";
import { Outlet } from "react-router";
import BannerDisCount from "../ui/BannerDisCount";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const MainLayout = () => {
  return (
    <div>
      <BannerDisCount />
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;

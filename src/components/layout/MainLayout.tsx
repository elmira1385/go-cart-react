import React from "react";
import { Outlet } from "react-router";
import BannerDisCount from "../ui/BannerDisCount";
import Header from "../ui/Header";

const MainLayout = () => {
  return (
    <div>
      <BannerDisCount />
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;

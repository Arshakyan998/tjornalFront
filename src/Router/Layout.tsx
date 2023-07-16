import React from "react";
import { Comments, Header, Menu } from "../components";
import { Outlet } from "react-router-dom";
import AddCommentForm from "../components/Sidebar/Comments/AddCommentForm";
import Tabs from "../components/Tabs/Tabs";

const Layout: React.FC = () => {
  return (
    <>
      <Header />

      <main className="bg-[#f2f2f2] flex justify-center   min-h-[500px]">
        <div className="w-[1064px] flex justify-between  ">
          <Menu />
          <Outlet />
          <Comments />
        </div>
      </main>
    </>
  );
};

export default Layout;

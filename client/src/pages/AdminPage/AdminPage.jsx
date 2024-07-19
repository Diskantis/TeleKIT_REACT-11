import React from "react";
import { Outlet } from "react-router-dom";
import { Paths } from "../../routers";

import SideBar from "../../components/Layouts/SideBar.jsx";
import PageLayout from "../../components/Layouts/PageLayout.jsx";
import MainLayout from "../../components/Layouts/MainLayout.jsx";

const AdminPage = () => {
  const menuItems = [
    {
      icon: "../../icon.svg#people",
      name: "Пользователи",
      link: Paths.USER_LIST_ROUTE,
    },
    {
      icon: "../../icon.svg#camera",
      name: "Оборудование",
      link: Paths.EQUIPMENT_LIST_ROUTE,
    },
  ];

  return (
    <PageLayout>
      <SideBar items={menuItems} />
      <MainLayout title="Административная страница.">
        <Outlet />
      </MainLayout>
    </PageLayout>
  );
};

export default AdminPage;

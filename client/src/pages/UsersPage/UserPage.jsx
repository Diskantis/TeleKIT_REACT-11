import React from "react";
import { Outlet } from "react-router-dom";
import { Paths } from "../../routers/index.js";

import SideBar from "../../components/Layouts/SideBar.jsx";
import PageLayout from "../../components/Layouts/PageLayout.jsx";
import MainLayout from "../../components/Layouts/MainLayout.jsx";

const AdminUserPage = () => {
  const menuItems = [
    {
      icon: "../../icon.svg#people",
      name: "Список пользователей",
      link: Paths.USER_LIST_ROUTE,
    },
    {
      icon: "../../icon.svg#admin",
      name: "Добавить пользователя",
      link: Paths.USER_NEW_ROUTE,
    },
  ];

  return (
    <PageLayout>
      <SideBar items={menuItems} />
      <MainLayout title="Пользователи." />
      {/*<Outlet />*/}
    </PageLayout>
  );
};

export default AdminUserPage;

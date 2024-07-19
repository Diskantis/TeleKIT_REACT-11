import React from "react";

import MainLayout from "../../components/Layouts/MainLayout.jsx";
import { Paths } from "../../routers/index.js";
import PageLayout from "../../components/Layouts/PageLayout.jsx";
import SideBar from "../../components/Layouts/SideBar.jsx";

const UserNew = () => {
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
      <MainLayout title="Добавление нового пользователя."></MainLayout>
    </PageLayout>
  );
};

export default UserNew;

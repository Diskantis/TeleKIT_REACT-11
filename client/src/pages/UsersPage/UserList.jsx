import React from "react";

import { Paths } from "../../routers/index.js";

import SideBar from "../../components/Layouts/SideBar.jsx";
import PageLayout from "../../components/Layouts/PageLayout.jsx";
import MainLayout from "../../components/Layouts/MainLayout.jsx";

import DataGridUsers from "../../components/Layouts/DataGridUsers.jsx";

const UserList = () => {
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
      <MainLayout title="Список пользователей.">
        <DataGridUsers />
      </MainLayout>
    </PageLayout>
  );
};

export default UserList;

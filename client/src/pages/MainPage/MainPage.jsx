import React, { useEffect, useState } from "react";

import { Paths } from "../../routers";

import SideBar from "../../components/Layouts/SideBar.jsx";
import PageLayout from "../../components/Layouts/PageLayout.jsx";
import MainLayout from "../../components/Layouts/MainLayout.jsx";

import {
  useLazyCurrentQuery,
  useLazyGetAllUsersQuery,
} from "../../app/services/userApi.js";

const MainPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [triggerCurrentQuery] = useLazyCurrentQuery();
  const [triggerGetAllUsers] = useLazyGetAllUsersQuery();

  useEffect(() => {
    const UserRole = async () => {
      const user = await triggerCurrentQuery().unwrap();
      await triggerGetAllUsers().unwrap();
      if (user.role === "ADMIN") {
        setIsAdmin(true);
      }
    };
    UserRole();
  }, [triggerCurrentQuery]);

  const menuItems = [
    {
      icon: "../../icon.svg#calendar",
      name: "Расписание",
      link: Paths.SCHEDULE_ROUTE,
    },
    {
      icon: "../../icon.svg#kit",
      name: "Комплекты",
      link: Paths.KITS_ROUTE,
    },
    {
      icon: "../../icon.svg#camera",
      name: "Оборудование",
      link: Paths.EQUIPMENTS_CATALOG_ROUTE,
    },
    {
      icon: "../../icon.svg#people",
      name: "Получатели",
      link: Paths.RECIPIENT_ROUTE,
    },
  ];

  if (isAdmin) {
    menuItems.push({
      icon: "../../icon.svg#admin",
      name: "Админ панель",
      link: Paths.ADMIN_ROUTE,
    });
  }

  return (
    <PageLayout>
      <SideBar items={menuItems} />
      <MainLayout title="Главная страница"></MainLayout>
    </PageLayout>
  );
};

export default MainPage;

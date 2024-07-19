import React from "react";

import { Paths } from "../../routers";

import SideBar from "../../components/Layouts/SideBar.jsx";
import PageLayout from "../../components/Layouts/PageLayout.jsx";
import MainLayout from "../../components/Layouts/MainLayout.jsx";

const EquipmentsPage = () => {
  const menuItems = [
    {
      icon: "../../icon.svg#kit",
      name: "Список оборудования",
      link: Paths.EQUIPMENT_LIST_ROUTE,
    },
    {
      icon: "../../icon.svg#camera",
      name: "Добавить оборудование",
      link: Paths.EQUIPMENT_NEW_ROUTE,
    },
  ];

  return (
    <PageLayout>
      <SideBar items={menuItems} />
      <MainLayout title="Оборудование."></MainLayout>
    </PageLayout>
  );
};

export default EquipmentsPage;

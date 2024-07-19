import React from "react";

import { Paths } from "../../routers/index.js";

import SideBar from "../../components/Layouts/SideBar.jsx";
import MainLayout from "../../components/Layouts/MainLayout.jsx";
import PageLayout from "../../components/Layouts/PageLayout.jsx";

const EquipmentNew = () => {
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
      <MainLayout title="Добавление нового оборудования."></MainLayout>
    </PageLayout>
  );
};

export default EquipmentNew;

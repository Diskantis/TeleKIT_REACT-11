import React from "react";

import { Paths } from "../../routers";

import SideBar from "../../components/Layouts/SideBar.jsx";
import PageLayout from "../../components/Layouts/PageLayout.jsx";
import MainLayout from "../../components/Layouts/MainLayout.jsx";

const EquipmentsCatalog = () => {
  return (
    <PageLayout>
      <SideBar />
      <MainLayout title="Каталог оборудования."></MainLayout>
    </PageLayout>
  );
};

export default EquipmentsCatalog;

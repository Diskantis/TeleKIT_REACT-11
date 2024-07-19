import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/globals.css";

import App from "./app/App.jsx";
import AuthGuard from "./app/features/authGuard.jsx";

import { store } from "./app/store";
import { Paths } from "./routers/index.js";

// Rages
import LoginPage from "./pages/AuthenticationPage/LoginPage.jsx";
import RegisterPage from "./pages/AuthenticationPage/RegisterPage.jsx";

import MainPage from "./pages/MainPage/MainPage.jsx";
import SchedulePage from "./pages/SchedulePage/SchedulePage.jsx";

import AdminPage from "./pages/AdminPage/AdminPage.jsx";

// import UsersPage from "./pages/UsersPage/UserPage.jsx";
import UserList from "./pages/UsersPage/UserList.jsx";
import UserNew from "./pages/UsersPage/UserNew.jsx";

import EquipmentsPage from "./pages/EqipmentsPage/EquipmentsPage.jsx";
import EquipmentsCatalog from "./pages/EqipmentsPage/Equipments_Catalog.jsx";
import EquipmentList from "./pages/EqipmentsPage/EquipmentList.jsx";
import EquipmentNew from "./pages/EqipmentsPage/EquipmentNew.jsx";

// import Kits from "./components/Pages/Kits/Kits";

// import Recipients from "./components/Pages/Recipients/Recipients";
// import RecipientNew from "./components/Pages/Recipients/RecipientNew";
// import RecipientList from "./components/Pages/Recipients/RecipientList";

// Routs
const router = createBrowserRouter([
  {
    path: Paths.LOGIN_ROUTE,
    element: <App />,
    children: [
      { path: Paths.LOGIN_ROUTE, element: <LoginPage /> },
      { path: Paths.REGISTER_ROUTE, element: <RegisterPage /> },
    ],
  },
  {
    path: "/",
    element: <App />,
    children: [
      { path: Paths.MAIN_ROUTE, element: <MainPage /> },
      { path: Paths.SCHEDULE_ROUTE, element: <SchedulePage /> },
      { path: Paths.ADMIN_ROUTE, element: <AdminPage /> },

      // { path: Paths.USERS_ROUTE, element: <UsersPage /> },
      { path: Paths.USER_LIST_ROUTE, element: <UserList /> },
      { path: Paths.USER_NEW_ROUTE, element: <UserNew /> },

      // { path: Paths.EQUIPMENTS_ROUTE, element: <EquipmentsPage /> },
      { path: Paths.EQUIPMENTS_CATALOG_ROUTE, element: <EquipmentsCatalog /> },
      { path: Paths.EQUIPMENT_LIST_ROUTE, element: <EquipmentList /> },
      { path: Paths.EQUIPMENT_NEW_ROUTE, element: <EquipmentNew /> },

      //   { path: Paths.KITS_ROUTE, element: <Kits /> },
      //   {
      //     path: Paths.RECIPIENT_ROUTE,
      //     element: <Recipients />,
      //     children: [
      //       { path: Paths.RECIPIENT_NEW_ROUTE, element: <RecipientNew /> },
      //       { path: Paths.RECIPIENT_LIST_ROUTE, element: <RecipientList /> },
      //     ],
      //   },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthGuard>
      <RouterProvider router={router} />
    </AuthGuard>
  </Provider>,
);

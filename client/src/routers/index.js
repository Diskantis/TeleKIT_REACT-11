export const BASE_URL =
  process.env.NODE_ENV === "production" ? "none" : "http://localhost:5020";

export const Paths = {
  LOGIN_ROUTE: "/login",
  REGISTER_ROUTE: "register",
  MAIN_ROUTE: "/",
  SCHEDULE_ROUTE: "schedule",
  ADMIN_ROUTE: "/admin",

  USERS_ROUTE: "/users",
  USER_LIST_ROUTE: "/user_list",
  USER_NEW_ROUTE: "/user_new",

  // EQUIPMENTS_ROUTE: "/equipments",
  EQUIPMENTS_CATALOG_ROUTE: "/equipment_catalog",
  EQUIPMENT_LIST_ROUTE: "/equipment_list",
  EQUIPMENT_NEW_ROUTE: "/equipment_new",

  KITS_ROUTE: "kits",

  RECIPIENT_ROUTE: "recipient",
  RECIPIENT_NEW_ROUTE: "recipient_new",
  RECIPIENT_LIST_ROUTE: "recipient_list",
};

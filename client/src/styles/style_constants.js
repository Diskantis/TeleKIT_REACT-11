import { grey, red, green } from "@mui/material/colors";

// export const grey = {
//   50: "#fafafa",
//   100: "#f5f5f5",
//   200: "#eeeeee",
//   300: "#e0e0e0",
//   400: "#bdbdbd",
//   500: "#9e9e9e",
//   600: "#757575",
//   700: "#616161",
//   800: "#424242",
//   900: "#212121",
//   A100: "#f5f5f5",
//   A200: "#eeeeee",
//   A300: "#bdbdbd",
//   A400: "#616161",
// };

export const cyan = {
  50: "#d7f5fb",
  100: "#bae0e3",
  200: "#9bc8cd",
  300: "#7aafb5",
  400: "#609ca3",
  500: "#458992",
  600: "#3a7a81",
  700: "#2b656b",
  800: "#1e5158",
  900: "#0b3c41",
};

export const Color = {
  body_bg: grey[900],
  body_text: grey[50],

  page_bg: "#2c2c2cff",
  page_title: "#474747ff",

  schedule_bg: "#252424",
  schedule_card: "#646464",
  schedule_card_dragging: "#3f3f3f",

  sidebar_bg: grey[900],
  sidebar_sel_hover: cyan[700],

  btn_link_auth: cyan[500],

  btn_submit: cyan[800],
  btn_submit_hover: cyan[900],

  btn_edit: green[600],
  btn_edit_hover: green[900],
  btn_delete: red["A700"],
  btn_delete_hover: red[900],
  btn_border: grey[500],

  label_auth: "#ffc36a",
  label_auth_err: red[500],
  label_auth_err_hover: red[900],

  input_auth_bg: "#232323",

  input_create_bg: "#212121CD",
  input_create_bg_hover: "#21212159",
  input_create_shadow: "#003a6e",

  table_header: cyan[900],
  table_bg: grey[900],
  table_text: grey[50],
  table_border: grey[700],
  table_row_edit_bg: "black",
  table_row_select: cyan[900],
  table_row_hover: grey[800],

  scrollbar_track: grey[800],
  scrollbar_thumb: grey[100],

  gradient_bg: `linear-gradient(90deg, ${cyan[900]} 0%, ${cyan[800]} 100%)`,
};

// export const Color = {
//   body_bg: "#111111ff",
//   body_text: "#ffffff",
//
//   page_bg: "#2c2c2cff",
//   page_title: "#474747ff",
//
//   schedule_bg: "#252424",
//   schedule_card: "#646464",
//   schedule_card_dragging: "#3f3f3f",
//
//   sidebar_bg: "#252525",
//   sidebar_sel_hover: "#42d312",
//
//   btn_submit: "#0e4c54",
//   btn_submit_hover: "#0b3c41",
//   btn_submit_active: "#156f7e",
//
//   btn_edit_green: "#198754",
//   btn_delete_red: "#dc3545",
//
//   label_auth: "#ffc36a",
//   label_auth_err: "#d32f2f",
//   label_auth_err_hover: "#e81111",
//
//   input_auth_bg: "#232323",
//
//   input_create_bg: "#212121CD",
//   input_create_bg_hover: "#21212159",
//   input_create_shadow: "#003a6e",
//
//   // table_text: "#adb5bd",
//   table_text: "#FFFFFFD8",
//   table_bg: "#2c2c2c",
//   table_inputBorder: "#495057",
//
//   scrollbar: "#212121CD",
//   scrollbar_thumb: "#818181",
//
//   // gradient_bg: `linear-gradient(90deg, #0b3c41 0%, #0e4c54 100%)`,
//   gradient_bg: `linear-gradient(90deg, ${Cyan[900]} 0%, ${Cyan[800]} 100%)`,
// };

export const mixinFontParams = ({
  family,
  size,
  height,
  weight,
  style,
  spacing,
}) => `
  font-family: ${family || "Roboto, sans-serif"};
  font-size: ${size || "1rem"};
  line-height: ${height || "normal"};
  font-weight: ${weight || 400};
  font-style: ${style || "normal"};
  letter-spacing: ${spacing || "0rem"};
`;

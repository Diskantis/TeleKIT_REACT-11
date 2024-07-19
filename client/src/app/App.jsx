import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { selectIsAuthenticated } from "./features/userSlice.js";

import { Paths } from "../routers";

import Header from "../components/Layouts/Header.jsx";
import Footer from "../components/Layouts/Footer.jsx";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(Paths.LOGIN_ROUTE);
    }
  }, [isAuthenticated, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

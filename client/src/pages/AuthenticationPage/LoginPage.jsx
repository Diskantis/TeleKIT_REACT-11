import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Color } from "../../styles/style_constants.js";

import { Paths } from "../../routers/index.js";
import { useLoginMutation } from "../../app/services/userApi.js";

import SideBar from "../../components/Layouts/SideBar.jsx";
import PageLayout from "../../components/Layouts/PageLayout.jsx";
import MainLayout from "../../components/Layouts/MainLayout.jsx";

import { Box, Link, Grid, IconButton, Stack, Alert } from "@mui/material";
import { FormControl, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";

import ButtonSubMUI from "../../components/Elements/ElementMUI/ButtonMUI.jsx";
import InputLabelMUI from "../../components/Elements/ElementMUI/InputLabeMUI.jsx";
import InputFilledMUI from "../../components/Elements/ElementMUI/InputFilledMUI.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  //Inputs
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // Inputs Errors
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // State valid Form
  const [formValid, setFormValid] = useState("");

  // State show Password
  const [showPassword, setShowPassword] = React.useState(false);

  // СЛУШАТЕЛЬ: проверка Email (onBlur - когда он не в фокусе)
  const handleEmail = () => {
    setEmailError(false);
  };

  // СЛУШАТЕЛЬ: проверка Password (onBlur - когда он не в фокусе)
  const handlePassword = () => {
    if (
      !passwordInput ||
      passwordInput.length < 5 ||
      passwordInput.length > 20
    ) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  // СЛУШАТЕЛЬ: показывать Password или скрыть
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // СЛУШАТЕЛЬ: отправка данных из формы
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // ЕСЛИ есть ошибка в Email
    if (emailError || !emailInput) {
      setEmailError(true);
      setFormValid('Вы не ввели email. Введите "Email"');
      return;
    }

    // ЕСЛИ есть ошибка в Password
    if (passwordError || !passwordInput) {
      setPasswordError(true);
      setFormValid(
        'Пароль должен быть в диапазоне от 5 до 20 символов. Введите "Пароль"',
      );
      return;
    }
    setFormValid(null);

    const email = data.get("email");
    const password = data.get("password");

    try {
      await login({ email, password }).unwrap();
      navigate(Paths.MAIN_ROUTE);
    } catch (err) {
      setEmailError(true);
      setPasswordError(true);
      setFormValid(err.data.message);
    }
  };

  return (
    <PageLayout>
      <SideBar />
      <MainLayout title="Авторизация">
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 15, width: "580px" }}
        >
          <FormControl
            sx={{ mt: 2, width: "100%" }}
            variant="filled"
            size="small"
            required
          >
            <InputLabelMUI error={emailError} htmlFor="email">
              Email
            </InputLabelMUI>
            <InputFilledMUI
              name="email"
              id="email"
              type="text"
              fullWidth
              autoComplete="email"
              autoFocus
              error={emailError}
              onBlur={handleEmail}
              onChange={(event) => {
                setEmailInput(event.target.value);
              }}
              value={emailInput}
            />
          </FormControl>
          <FormControl
            sx={{ mt: 2, width: "100%" }}
            variant="filled"
            size="small"
            required
          >
            <InputLabelMUI error={passwordError} htmlFor="password">
              Пароль
            </InputLabelMUI>
            <InputFilledMUI
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              fullWidth
              autoComplete="current-password"
              error={passwordError}
              onBlur={handlePassword}
              onChange={(event) => {
                setPasswordInput(event.target.value);
              }}
              value={passwordInput}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOff
                        sx={
                          passwordError
                            ? { fill: Color.label_auth_err }
                            : { fill: Color.btn_link_auth }
                        }
                      />
                    ) : (
                      <Visibility
                        sx={
                          passwordError
                            ? { fill: Color.label_auth_err }
                            : { fill: Color.btn_link_auth }
                        }
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <ButtonSubMUI
            type="submit"
            name="Войти"
            variant="contained"
            fullWidth
            startIcon={<LoginIcon />}
          />
          {formValid && (
            <Stack sx={{ width: "100%", pt: 1 }} spacing={2}>
              <Alert
                severity="error"
                size="small"
                sx={{ color: "white", bgcolor: Color.input_auth_bg }}
              >
                {formValid}
              </Alert>
            </Stack>
          )}
        </Box>
        <Grid container sx={{ justifyContent: "center", pt: 1 }}>
          <Grid item>
            <Link
              component="button"
              onClick={() => navigate(Paths.REGISTER_ROUTE)}
              underline="hover"
              sx={{
                color: Color.btn_link_auth,
              }}
            >
              "Нет учетной записи? Зарегистрироваться"
            </Link>
          </Grid>
        </Grid>
      </MainLayout>
    </PageLayout>
  );
};

export default LoginPage;

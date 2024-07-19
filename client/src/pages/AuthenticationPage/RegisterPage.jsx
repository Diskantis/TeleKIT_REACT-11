import React, { useState } from "react";

import SideBar from "../../components/Layouts/SideBar.jsx";
import PageLayout from "../../components/Layouts/PageLayout.jsx";
import MainLayout from "../../components/Layouts/MainLayout.jsx";

import { Box, Link, Grid, Stack, FormControl, Alert } from "@mui/material";

import ButtonSubMUI from "../../components/Elements/ElementMUI/ButtonMUI.jsx";
import InputLabelMUI from "../../components/Elements/ElementMUI/InputLabeMUI.jsx";
import InputFilledMUI from "../../components/Elements/ElementMUI/InputFilledMUI.jsx";
import { Color } from "../../styles/style_constants.js";
import { Paths } from "../../routers/index.js";
import { useNavigate } from "react-router-dom";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../app/services/userApi.js";

const RegisterPage = () => {
  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  //Inputs
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [role] = useState("GUEST");

  // Inputs Errors
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // State valid Form
  const [formValid, setFormValid] = useState("");

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

  // СЛУШАТЕЛЬ: отправка данных из формы
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Если ошибка в Email
    if (emailError || !emailInput) {
      setEmailError(true);
      setFormValid('Вы не ввели email. Введите "Email"');
      return;
    }

    // Если ошибка в Password
    if (passwordError || !passwordInput) {
      setPasswordError(true);
      setFormValid(
        'Пароль должен быть в диапазоне от 5 до 20 символов. Введите "Пароль"',
      );
      return;
    }
    setFormValid(null);

    const lastName = data.get("lastName");
    const firstName = data.get("firstName");
    const surName = data.get("surName");
    const email = data.get("email");
    const password = data.get("password");
    const role = data.get("role");

    try {
      await register({
        lastName,
        firstName,
        surName,
        email,
        password,
        role,
      }).unwrap();
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
      <MainLayout title="Регистрация">
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
          >
            <InputLabelMUI htmlFor="lastName">Фамилия</InputLabelMUI>
            <InputFilledMUI
              name="lastName"
              id="lastName"
              type="text"
              fullWidth
              autoFocus
              onChange={(event) => {
                setLastName(event.target.value);
              }}
              value={lastName}
            />
          </FormControl>
          <FormControl
            sx={{ mt: 2, width: "100%" }}
            variant="filled"
            size="small"
          >
            <InputLabelMUI htmlFor="lastName">Имя</InputLabelMUI>
            <InputFilledMUI
              name="firstName"
              id="firstName"
              type="text"
              fullWidth
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              value={firstName}
            />
          </FormControl>
          <FormControl
            sx={{ mt: 2, width: "100%" }}
            variant="filled"
            size="small"
          >
            <InputLabelMUI htmlFor="surName">Отчество</InputLabelMUI>
            <InputFilledMUI
              name="surName"
              id="surName"
              type="text"
              fullWidth
              onChange={(event) => {
                setSurName(event.target.value);
              }}
              value={surName}
            />
          </FormControl>
          <FormControl
            sx={{ mt: 2, width: "100%" }}
            variant="filled"
            size="small"
            required
          >
            <InputLabelMUI htmlFor="email">Email</InputLabelMUI>
            <InputFilledMUI
              name="email"
              id="email"
              type="text"
              fullWidth
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
            <InputLabelMUI htmlFor="password">Пароль</InputLabelMUI>
            <InputFilledMUI
              name="password"
              id="password"
              type="text"
              fullWidth
              error={passwordError}
              onBlur={handlePassword}
              onChange={(event) => {
                setPasswordInput(event.target.value);
              }}
              value={passwordInput}
            />
          </FormControl>
          <FormControl
            sx={{ mt: 2, width: "100%" }}
            variant="filled"
            size="small"
          >
            <InputLabelMUI htmlFor="role">
              Роль (нельзя изменить на этапе регистрации)
            </InputLabelMUI>
            <InputFilledMUI
              name="role"
              id="role"
              type="text"
              fullWidth
              value={role}
            />
          </FormControl>
          <ButtonSubMUI
            type="submit"
            name="Зарегистрировать"
            variant="contained"
            fullWidth
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
              onClick={() => navigate(Paths.LOGIN_ROUTE)}
              underline="hover"
              sx={{
                color: Color.btn_link_auth,
              }}
            >
              "Есть учетная записи? Войти"
            </Link>
          </Grid>
        </Grid>
      </MainLayout>
    </PageLayout>
  );
};

export default RegisterPage;

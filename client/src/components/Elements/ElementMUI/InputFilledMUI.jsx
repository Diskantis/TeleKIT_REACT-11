import React from "react";

import { FilledInput } from "@mui/material";

import styled from "@emotion/styled";
import { Color } from "../../../styles/style_constants.js";

const InputFilledMUI = ({ ...props }) => {
  return <FilledInputStl {...props} />;
};

export default InputFilledMUI;

export const FilledInputStl = styled(FilledInput)(({ error }) => ({
  backgroundColor: Color.input_create_bg,
  color: Color.body_text,

  "&.MuiFilledInput-root": {
    borderBottom: "1px solid",
    borderColor: error ? Color.label_auth_err : Color.btn_submit,
    "&:hover": {
      backgroundColor: Color.input_create_bg_hover,
    },
    "&:hover:before": {
      borderColor: error ? Color.label_auth_err_hover : Color.btn_submit_hover,
    },
    "&.Mui-focused": {
      backgroundColor: Color.input_auth_bg,
    },
  },
  "&.MuiFilledInput-root:before": {
    color: Color.body_text,
    borderColor: error ? Color.label_auth_err : Color.btn_submit,
    "&:hover": {
      borderColor: error ? Color.label_auth_err : Color.btn_submit,
    },
  },
  "&.MuiFilledInput-root:after": {
    color: Color.body_text,
    borderColor: error ? Color.label_auth_err : Color.btn_submit,
  },
}));

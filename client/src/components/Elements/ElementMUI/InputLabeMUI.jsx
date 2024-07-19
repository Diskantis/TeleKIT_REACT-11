import React from "react";

import { InputLabel } from "@mui/material";

import styled from "@emotion/styled";
import { Color } from "../../../styles/style_constants.js";

const InputLabelMUI = ({ children, ...props }) => {
  return <InputLabelStl {...props}>{children}</InputLabelStl>;
};

export default InputLabelMUI;

export const InputLabelStl = styled(InputLabel)({
  color: Color.label_auth,
  "&.Mui-focused": {
    color: Color.label_auth ?? Color.label_auth_err,
  },
  "&.Mui-error": {
    color: Color.label_auth_err,
  },
});

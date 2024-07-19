import React from "react";

import styled from "@emotion/styled";
import { Color, mixinFontParams } from "../../styles/style_constants.js";

const Footer = () => {
  return (
    <FooterStl>
      &copy; {new Date().getFullYear()} All rights reserved by Mikhail Zajkov
    </FooterStl>
  );
};

export default Footer;

const FooterStl = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Color.gradient_bg};
  color: ${Color.body_text};
  ${mixinFontParams({ weight: 600, spacing: "2px" })}
  cursor: default;
`;

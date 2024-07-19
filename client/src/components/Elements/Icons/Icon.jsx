import React from "react";

import styled from "@emotion/styled";
import { Color } from "../../../styles/style_constants.js";

const Icon = ({ href, active, onClick }) => {
  return (
    <IconStl onClick={onClick}>
      <SvgStl $active={active}>
        <use xlinkHref={href} width={35} height={35} />
      </SvgStl>
    </IconStl>
  );
};

export default Icon;

const IconStl = styled.div`
  width: 35px;
  height: 35px;
`;

const SvgStl = styled.svg`
  width: 100%;
  height: 100%;
  fill: ${Color.body_text};
  cursor: ${(props) => (props.$active ? "pointer" : "default")};
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition: all 0.2s ease-out;

  &:hover {
    fill: $logo_link;
  }
`;

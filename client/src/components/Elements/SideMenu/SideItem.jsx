import React from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import { Color } from "../../../styles/style_constants.js";

export const SideItem = ({ item }) => {
  return (
    <SideMenuItemStl to={item.link}>
      <SvgStl>
        <use xlinkHref={item.icon} width={20} height={20} />
      </SvgStl>
      {item.name}
    </SideMenuItemStl>
  );
};

const SideMenuItemStl = styled(Link)`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 15px;
  margin-bottom: 5px;
  gap: 10px;

  &:hover {
    border-radius: 0 10px 10px 0;
    background-color: ${Color.sidebar_sel_hover};
  }
`;

const SvgStl = styled.svg`
  width: 20px;
  height: 20px;
  display: flex;
  fill: ${Color.body_text};
`;

// const SideMenuItemStl = styled.div`
//   width: 290px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   color: ${Color.body_text};
//   ${mixinFontParams({ height: 1.6 })}
//   background-color: ${Color.sidebar_bg};
//   border-radius: 10px;
//   margin: 10px 0;
//   padding: 30px 15px 15px 0;
// `;

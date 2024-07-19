import React from "react";

import SideMenu from "../Elements/SideMenu/SideMenu.jsx";

import styled from "@emotion/styled";
import { Color, mixinFontParams } from "../../styles/style_constants.js";

const SideBar = ({ items }) => {
  return (
    <SideBarStl>
      <SideMenu items={items} />
    </SideBarStl>
  );
};

export default SideBar;

const SideBarStl = styled.div`
  width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${Color.body_text};
  ${mixinFontParams({ height: 1.6 })}
  background-color: ${Color.sidebar_bg};
  border-radius: 10px;
  margin: 10px 0;
  padding: 30px 15px 15px 0;
`;

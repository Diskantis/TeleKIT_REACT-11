import React from "react";

import styled from "@emotion/styled";
import { Color, mixinFontParams } from "../../styles/style_constants.js";

const MainLayout = ({ title, children, onClick }) => {
  return (
    <MainLayoutStl onClick={onClick}>
      <MainLayoutTitleStl>{title}</MainLayoutTitleStl>
      <MainLayoutContainerStl>{children}</MainLayoutContainerStl>
    </MainLayoutStl>
  );
};

export default MainLayout;

const MainLayoutStl = styled.div`
  width: calc(100vw - 330px);
  margin: 10px 0;
  padding-left: 20px;
`;

const MainLayoutTitleStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  color: ${Color.body_text};
  border: 1px;
  border-radius: 10px;
  background-color: ${Color.page_title};
  ${mixinFontParams({
    size: "1.4rem",
    weight: 400,
    style: "italic",
    spacing: "0.05rem",
  })}
`;

const MainLayoutContainerStl = styled.div`
  height: calc(100vh - 145px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px;
  border-radius: 10px;
  background-color: ${Color.page_bg};
  font-size: 16px;
  margin-top: 10px;
  padding: 10px;
`;

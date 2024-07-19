import React from "react";

import styled from "@emotion/styled";

const PageLayout = ({ children }) => {
  return <PageLayoutStl>{children}</PageLayoutStl>;
};

export default PageLayout;

const PageLayoutStl = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
`;

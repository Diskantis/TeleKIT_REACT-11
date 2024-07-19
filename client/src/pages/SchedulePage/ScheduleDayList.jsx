import React from "react";

import styled from "@emotion/styled";
import { Color } from "../../styles/style_constants.js";

const ScheduleDayList = ({ children, provided }) => {
  return (
    <ScheduleDayListStl ref={provided.innerRef} {...provided.droppableProps}>
      {children}
    </ScheduleDayListStl>
  );
};

export default ScheduleDayList;

const ScheduleDayListStl = styled.div`
  min-width: 180px;
  min-height: calc(100vh - 230px);
  display: flex;
  flex-direction: column;
  align-items: center;
  //background: #003a6e;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    border-radius: 0 0.375rem 0.375rem 0;
    background-color: ${Color.scrollbar};
    padding-left: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${Color.scrollbar_thumb};
  }
`;

import React from "react";

import styled from "@emotion/styled";
import { Color } from "../../styles/style_constants.js";

const ScheduleCard = ({ item, snapshot, provided }) => {
  return (
    <CardStl
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{
        backgroundColor: snapshot.isDragging
          ? Color.schedule_card
          : Color.schedule_card_dragging,
        ...provided.draggableProps.style,
      }}
    >
      <CardTitleStl>{item.name}</CardTitleStl>
      <CardTimeStl>
        <span>{item.timeIn}</span>
        <span> - </span>
        <span>{item.timeOut}</span>
      </CardTimeStl>
      <p>{item.operator}</p>
    </CardStl>
  );
};

export default ScheduleCard;

const CardStl = styled.div`
  max-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
  gap: 3px;
  margin: 0 5px 8px 5px;
  user-select: none;
`;

const CardTitleStl = styled.div`
  width: 150px;
  text-align: center;
  border-bottom: 1px solid gray;
`;

const CardTimeStl = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-around;
`;

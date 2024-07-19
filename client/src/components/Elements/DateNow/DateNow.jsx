import React from "react";

import styled from "@emotion/styled";
import { Color, mixinFontParams } from "../../../styles/style_constants.js";

const DateNow = () => {
  const date = new Date();
  let dayWeek = date.getDay();
  let dayNum = date.getDate();
  let month = date.getMonth();

  const monthRus = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const weekdayRus = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  return (
    <DateNowStl>
      {weekdayRus[dayWeek]}, {dayNum} {monthRus[month]}
    </DateNowStl>
  );
};

export default DateNow;

const DateNowStl = styled.time`
  width: 27.33vw;
  text-align: center;
  color: ${Color.label_auth};
  ${mixinFontParams({ size: "1.8rem" })}
`;

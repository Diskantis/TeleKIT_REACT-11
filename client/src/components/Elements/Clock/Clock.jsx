import React, { useEffect, useState } from "react";

import styled from "@emotion/styled";
import { Color, mixinFontParams } from "../../../styles/style_constants.js";

const Clock = () => {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setClock(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [clock]);
  return (
    <ClockStl suppressHydrationWarning={true}>
      {clock.toLocaleTimeString()}
    </ClockStl>
  );
};

export default Clock;

const ClockStl = styled.time`
  width: 27.33vw;
  text-align: right;
  color: ${Color.body_text};
  ${mixinFontParams({ size: "2.2rem", weight: 600 })}
`;

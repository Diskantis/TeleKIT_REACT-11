import React from "react";

import { BASE_URL } from "../../../routers/index.js";

import styled from "@emotion/styled";

const ProfUser = (user) => {
  return (
    <ProfUserStl>
      <TitleStl>Пользователь: &nbsp; </TitleStl>
      <AvatarStl
        src={`${BASE_URL}${user.avatarURL}`}
        alt="Avatar"
        style={{ width: 40, height: 40 }}
      />
      <TitleStl>
        &nbsp;{user.lastName} {user.firstName[0]}.{user.surName[0]}.
      </TitleStl>
    </ProfUserStl>
  );
};

export default ProfUser;

const ProfUserStl = styled.div`
  display: flex;
  align-content: center;
`;

const AvatarStl = styled.img`
  object-fit: cover;
  border-radius: 50%;
`;

const TitleStl = styled.span`
  align-content: center;
`;

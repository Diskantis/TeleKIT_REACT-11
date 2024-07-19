import React from "react";

import { SideItem } from "./SideItem.jsx";

import styled from "@emotion/styled";

const SideMenu = ({ items }) => {
  return (
    <SideMenuStl>
      {items !== undefined ? (
        items.map((item) => <SideItem item={item} key={item.name} />)
      ) : (
        <div>
          <SideAppNameStl>Телевизионный журналистский комплект</SideAppNameStl>
          <SideAuthorAppStl>by Zajkov Mikhail</SideAuthorAppStl>
        </div>
      )}
    </SideMenuStl>
  );
};

export default SideMenu;

const SideMenuStl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SideAppNameStl = styled.p`
  padding: 0 75px 20px 15px;
  text-transform: uppercase;
`;

const SideAuthorAppStl = styled.p`
  padding-left: 15px;
`;

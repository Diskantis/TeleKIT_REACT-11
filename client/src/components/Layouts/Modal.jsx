import React from "react";

// import styled from "styled-components/macro";
import styled from "@emotion/styled";
import { Color, mixinFontParams } from "../../styles/style_constants.js";

import ButtonSubMUI from "../Elements/ElementMUI/ButtonMUI.jsx";

const Modal = ({
  type = "error" || "delete",
  title,
  children,
  btnName,
  active,
  setActive,
  onRemoveUser,
}) => {
  return (
    <ModalWin $active={active} onClick={() => setActive(false)}>
      <ModalContent $active={active} onClick={(e) => e.stopPropagation()}>
        <ModalTitle>{title}</ModalTitle>
        {children}
        <FormRowStyled>
          {type === "delete" && (
            <ButtonSubMUI
              name={btnName}
              width="150px"
              variant="contained"
              onClick={onRemoveUser}
            />
          )}
          <ButtonSubMUI
            name="Отмена"
            width="150px"
            variant="contained"
            onClick={() => {
              setActive(false);
            }}
          />
        </FormRowStyled>
      </ModalContent>
    </ModalWin>
  );
};

export default Modal;

const ModalWin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
  pointer-events: ${(props) => (props.$active ? "all" : "none")};
  opacity: ${(props) => (props.$active ? "1" : "0")};
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  //top: 250px;
  width: 30vw;
  margin-left: 330px;
  padding-top: 20px;
  border-radius: 12px;
  background-color: ${Color.page_bg};

  transition: 0.3s all;
  transform: ${(props) => (props.$active ? "scale(1)" : "scale(0.3)")};
`;

const ModalTitle = styled.div`
  color: ${Color.body_text};
  ${mixinFontParams({ size: "1.3rem" })}
  text-align: center;
`;

export const FormRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px 0;
  row-gap: 10px;
  column-gap: 20px;
`;

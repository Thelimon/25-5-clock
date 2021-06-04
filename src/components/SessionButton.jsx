import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BreakArrowsContainer } from "../styles/BreakLenghtStyled";

const SessionButton = () => {
  return (
    <>
      <h3>Session Lenght</h3>
      <BreakArrowsContainer>
        <a>
          <AiOutlineArrowDown />
        </a>
        <p>0</p>
        <a>
          <AiOutlineArrowUp />
        </a>
      </BreakArrowsContainer>
    </>
  );
};

export default SessionButton;

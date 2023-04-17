import React from "react";
import { Tablet } from "./Styled/tableStyled";

export const Table = ({ children }) => {
  return (
    <>
      <Tablet>{children}</Tablet>
    </>
  );
};

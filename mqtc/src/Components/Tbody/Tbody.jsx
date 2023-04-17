import React from "react";
import { TableBody } from "./styled/tbodyStyled";

export const Tbody = ({ children }) => {
  return (
    <>
      <TableBody>{children}</TableBody>
    </>
  );
};

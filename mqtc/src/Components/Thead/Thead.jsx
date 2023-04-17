import React from "react";
import { TableHead } from "./styled/theadStyled";

export const Thead = ({ children }) => {
  return (
    <>
      <TableHead>
        {children}
      </TableHead>
    </>
  );
};

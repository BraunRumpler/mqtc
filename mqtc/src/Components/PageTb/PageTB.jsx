import React from "react";
import { ContPanel} from "./styled/pageTBStyled";


const PageTB = ({children}) => {
  return (
    <>
      <ContPanel>
       {children}
      </ContPanel>
    </>
  );
};

export default PageTB;

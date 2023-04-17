import React from "react";
import { Page } from "./styled/appTablet";
import { Table } from "../Table/Table";
import { TableHead } from "../Thead/styled/theadStyled";
import { Tbody } from "../Tbody/Tbody";
import { ContPanel } from "../PageTb/styled/pageTBStyled";
import { TabletRow } from "../TableRow/TabletRow";
import data from "../../json/referrals_finalized.json";

const AppTablet = () => {
  return (
    <>
      <ContPanel>
        <Page>
          <Table>
            <TableHead>
              <tr>               
                <th>Header</th>
                <th>Observations</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Created By</th>
                <th>Attended By</th>
                <th># of Students</th>
                <th>Student Names</th>
                <th>Number of students </th>
              </tr>
            </TableHead>
            <Tbody>
              {data.map( data =>  <TabletRow key={data.uid} data={data}   />   )}
            </Tbody>
          </Table>
        </Page>
      </ContPanel>
    </>
  );
};

export default AppTablet;

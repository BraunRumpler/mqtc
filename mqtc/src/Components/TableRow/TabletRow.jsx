import React from "react";
import { Row } from "./styled/tabletRowStyled";

export const TabletRow = ({ data }) => {
  return (
    <>
      <Row>
        <td>{data.uid}</td>
        <td>{data.header}</td>
        <td>{data.observations}</td>
        <td>{data.status}</td>
        <td>{data.created_at}</td>
        <td>{data.created_by.names}</td>
        <td>{data.attended_by.names}</td>
        <td>{data.data.students.length}</td>
        <td>
          <ul>
            {data.data.students.map((student) => (
              <li key={student.uid}>{student.names}</li>
            ))}
          </ul>
        </td>
        <td>
          <ul>
            {data.data.students.map((student) => (
              <li key={student.uid}>{student.phone_number}</li>
            ))}
          </ul>
        </td>
      </Row>
    </>
  );
};

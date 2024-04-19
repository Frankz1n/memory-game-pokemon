import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 400px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: blue;
`;

export const ScoreTable = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableRow = styled.tr`
  background-color: #f2f2f2;
`;

export const TableTitle = styled.th`
  padding: 10px;
  text-align: center;
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
`;

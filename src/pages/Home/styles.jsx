import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #324c81;
  width: 80vw;
  min-height: 80vh;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  width: 100px;
  height: 30px;
  background-color: red;
  border-radius: 12px;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

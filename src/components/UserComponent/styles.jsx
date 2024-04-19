import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.h1`
  font-size: 26px;
  color: white;
`;

export const UserImg = styled.img`
  width: 250px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const UserName = styled.input`
  width: 150px;
  height: 30px;
  background-color: transparent;
  border: 2px solid red;
  border-radius: 12px;
`;

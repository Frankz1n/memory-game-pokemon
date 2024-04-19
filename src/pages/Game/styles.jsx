import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Options = styled.div`
  background-color: #324c81;
  width: 200px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 15px;
  margin-top: 20px;
`;

export const Title = styled.h3`
  color: white;
`;

export const OptionsButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledButtons = styled.button`
  width: 55px;
  background-color: transparent;
  border: 3px solid white;
  border-radius: 12px;
  color: white;
  padding: 2px;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  background-color: #324c81;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  padding: 10px;
  border-radius: 12px;

  @media (min-width: 375px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;

export const CardImg = styled.img`
  width: 50px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 375px) {
    width: 85px;
  }
`;

export const Timer = styled.div`
  background-color: #007bff;
  color: #fff;
  font-size: 24px;
  width: 100px;
  height: 30px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const TimerButton = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  @media (min-width: 375px) {
    display: flex;
    flex-direction: row;
    margin-top: 0;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalMessage = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ModalButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Span = styled.span`
  color: blue;
  text-transform: uppercase;
`;

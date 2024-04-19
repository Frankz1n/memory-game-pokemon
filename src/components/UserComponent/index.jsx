import React, { useState, useEffect } from "react";
import { Container, Title, UserImg, UserName } from "./styles";
import background from "../../../public/assets/images/ash.png";

export default function UserComponent() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <Container>
      <Title>Seja Bem-Vindo(a)</Title>
      <UserImg src={background} alt="ash" />
      <UserName
        placeholder="Digite seu nome"
        value={userName}
        onChange={handleUserNameChange}
      />
    </Container>
  );
}

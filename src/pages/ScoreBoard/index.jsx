import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  ScoreTable,
  TableTitle,
  Title,
  TableRow,
  TableCell,
} from "./styles";
import { ModalButton } from "../Game/styles";

export default function ScoreBoard() {
  const userName = localStorage.getItem("userName") || "Nome não definido";
  const finalDifficulty =
    localStorage.getItem("finalDifficulty") || "Não definida";
  const finalMoves = localStorage.getItem("finalMoves") || "Não definido";
  const finalTime = localStorage.getItem("finalTime") || "Não definido";
  const finalScore = localStorage.getItem("finalScore") || "Não definido";
  const navigate = useNavigate();

  const handleAddToLeaderboard = () => {
    navigate("/"); // Redirecionar para a página de placar
  };

  return (
    <Container>
      <Title>Placar de Líderes</Title>
      <ScoreTable>
        <thead>
          <TableRow>
            <TableTitle>Nome</TableTitle>
            <TableTitle>Dificuldade</TableTitle>
            <TableTitle>Movimentos</TableTitle>
            <TableTitle>Tempo</TableTitle>
            <TableTitle>Pontos</TableTitle>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>{userName}</TableCell>
            <TableCell>{finalDifficulty}</TableCell>
            <TableCell>{finalMoves}</TableCell>
            <TableCell>{finalTime}</TableCell>
            <TableCell>{finalScore}</TableCell>
          </TableRow>
        </tbody>
      </ScoreTable>
      <ModalButton onClick={handleAddToLeaderboard}>
        Jogar Novamente
      </ModalButton>
    </Container>
  );
}

import React, { useState, useEffect, useRef } from "react";
import cardsPokemon from "../../cards.jsx";
import back from "../../../public/assets/images/back.png";
import {
  CardContainer,
  CardImg,
  Container,
  Options,
  OptionsButtons,
  StyledButtons,
  Title,
  TimerButton,
  Timer,
  Modal,
  ModalContent,
  ModalMessage,
  ModalButton,
  Span,
} from "./styles.jsx";
import { useNavigate } from "react-router-dom";

const DEFAULT_DIFFICULTY = "easy";
const DIFFICULTY_OPTIONS = {
  easy: { pairs: 6 },
  medium: { pairs: 10 },
  hard: { pairs: 16 },
};

const BASE_SCORE = 1000;
const PENALTY_DECAY_CONSTANT = 5;

export default function Game() {
  // State
  const [difficulty, setDifficulty] = useState(DEFAULT_DIFFICULTY);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [pausedTime, setPausedTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [formattedTime, setFormattedTime] = useState("00:00");

  // Ref
  const timerRef = useRef(null);

  // Hooks
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "Nome não definido";

  // Effects
  useEffect(() => {
    generateCards(difficulty);
  }, [difficulty]);

  useEffect(() => {
    if (gameOver) {
      clearInterval(timerRef.current);
      setShowModal(true);
    }
  }, [gameOver]);

  useEffect(() => {
    if (isTimerRunning) {
      const timerId = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        setFormattedTime(formatTime(elapsedTime));
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [isTimerRunning, startTime]);

  useEffect(() => {
    if (gameOver) {
      clearInterval(timerRef.current);
    }
  }, [gameOver]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      if (cards[firstIndex].image === cards[secondIndex].image) {
        setMatchedCards([...matchedCards, cards[firstIndex].image]);
        updateScore();
      } else {
        setTimeout(() => {
          const newCards = [...cards];
          newCards[firstIndex].flipped = false;
          newCards[secondIndex].flipped = false;
          setCards(newCards);
        }, 1000);
      }
      setFlippedCards([]);
    }
  }, [flippedCards]);

  useEffect(() => {
    if (matchedCards.length === cards.length / 2 && startTime !== null) {
      setGameOver(true);
      pauseTimer();
    }
  }, [matchedCards, cards, startTime]);

  // Functions
  const generateCards = (difficulty) => {
    const { pairs } = DIFFICULTY_OPTIONS[difficulty];
    const shuffledImages = shuffleCards(cardsPokemon.map((card) => card.image));
    const selectedImages = shuffledImages.slice(0, pairs);
    const doubledImages = [...selectedImages, ...selectedImages];
    const shuffledCards = shuffleCards(
      doubledImages.map((image, index) => ({
        id: index,
        image: image,
        flipped: false,
      }))
    );

    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setStartTime(null);
    setPausedTime(0);
    setIsTimerRunning(false);
    setGameOver(false);
    setMoves(0);
    setScore(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const shuffleCards = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const flipCard = (index) => {
    if (!gameOver && flippedCards.length < 2 && !flippedCards.includes(index)) {
      const newCards = [...cards];
      newCards[index].flipped = true;
      setCards(newCards);
      setFlippedCards([...flippedCards, index]);
      setMoves((prevMoves) => prevMoves + 1);
      if (!startTime) {
        startTimer();
      }
    }
  };

  const startTimer = () => {
    setStartTime(Date.now() - pausedTime);
    setIsTimerRunning(true);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setPausedTime(Date.now() - startTime);
    }, 1000);
  };

  const pauseTimer = () => {
    setIsTimerRunning(false);
    setPausedTime(Date.now() - startTime);
    clearInterval(timerRef.current);
  };

  const handleTimerButtonClick = () => {
    if (isTimerRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  };

  const updateScore = () => {
    const elapsedTimeInSeconds = Math.floor((Date.now() - startTime) / 1000);
    const timePenalty = elapsedTimeInSeconds * PENALTY_DECAY_CONSTANT;
    const movesPenalty = moves * PENALTY_DECAY_CONSTANT;

    const scoreWithoutPenalty = BASE_SCORE - timePenalty - movesPenalty;
    const finalScore = Math.max(scoreWithoutPenalty, 0);

    const formattedTimeForLocalStorage =
      formatTimeForLocalStorage(elapsedTimeInSeconds);

    localStorage.setItem("finalScore", finalScore);
    localStorage.setItem("finalTime", formattedTimeForLocalStorage);
    localStorage.setItem("finalMoves", moves);
    localStorage.setItem("finalDifficulty", difficulty);

    setScore(finalScore);
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  const formatTimeForLocalStorage = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
    }`;
  };

  const closeModal = () => {
    setShowModal(false);
    if (gameOver) {
      setShowScoreModal(true);
    }
  };

  const handleAddToLeaderboard = () => {
    setShowScoreModal(false);
    navigate("/scoreboard");
  };

  // JSX
  return (
    <Container>
      <Options>
        <Title>Escolha a dificuldade</Title>
        <OptionsButtons>
          {Object.keys(DIFFICULTY_OPTIONS).map((option) => (
            <StyledButtons key={option} onClick={() => setDifficulty(option)}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </StyledButtons>
          ))}
        </OptionsButtons>
      </Options>
      <Timer>{formattedTime}</Timer>
      <TimerButton onClick={handleTimerButtonClick}>
        {isTimerRunning ? "Pausar Temporizador" : "Iniciar Temporizador"}
      </TimerButton>
      <CardContainer>
        {cards.map((card, index) => (
          <CardImg
            key={index}
            src={
              card.flipped || matchedCards.includes(card.image)
                ? card.image
                : back
            }
            alt={card.image}
            onClick={() => flipCard(index)}
          />
        ))}
      </CardContainer>
      {showModal && gameOver && (
        <Modal>
          <ModalContent>
            <ModalMessage>
              <span>
                Parabéns <Span>{userName}</Span> o jogo finalizado!
              </span>
              <span> Sua pontuação foi de: {score}</span>
              <span> Seus movimentos: {moves}</span>
            </ModalMessage>
            <ModalButton onClick={handleAddToLeaderboard}>
              Adicionar ao Placar
            </ModalButton>
            <ModalButton onClick={closeModal}>Fechar</ModalButton>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}

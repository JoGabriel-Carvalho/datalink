import React, { useState, useEffect } from 'react';
import questionsData from '../Util/questions'; // Importação do arquivo de perguntas

// Função para embaralhar as perguntas (algoritmo Fisher-Yates)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const MAX_TIME = 10;
const BASE_POINTS_NORMAL = 50; // Pontuação padrão para perguntas normais
const BASE_POINTS_PARITY_CHECKSUM = 200; // Pontuação padrão para paridade/checksum
const MIN_POINTS = 10; // Pontuação mínima para todas as perguntas
const PENALTY_POINTS = 10; // Penalidade para respostas incorretas

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null); 
  const [isCorrect, setIsCorrect] = useState(null); 
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(MAX_TIME); 
  const [userInput, setUserInput] = useState(''); // Campo de entrada
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Estado para desativar o botão

  useEffect(() => {
    const savedScore = localStorage.getItem('quizScore');
    if (savedScore) {
      setShowScore(true); // Se houver uma pontuação salva, mostra a pontuação final
      setScore(Number(savedScore)); // Converte para número
    } else {
      setQuestions(shuffleArray([...questionsData])); // Se não houver pontuação salva, inicia o quiz
    }
  }, []);

  // Controla o temporizador em segundo plano
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Multiplicador baseado no tempo restante
  const calculateMultiplier = (timeLeft) => {
    return Math.max(1, timeLeft); // Multiplicador vai até 10x e nunca fica menor que 1
  };

  // Função para calcular a pontuação com multiplicador
  const calculatePoints = (basePoints) => {
    const multiplier = calculateMultiplier(timeLeft);
    return Math.max(MIN_POINTS, basePoints * multiplier);
  };

  // Lida com perguntas de bit de paridade e checksum
  const handleAnswerSubmit = () => {
    setIsButtonDisabled(true); // Desativa o botão após o clique
    const correctAnswer = questions[currentQuestion].expectedAnswer;

    if (userInput === correctAnswer) {
      setIsCorrect(true);
      const pointsEarned = calculatePoints(BASE_POINTS_PARITY_CHECKSUM);
      setScore(score + Math.floor(pointsEarned));
    } else {
      setIsCorrect(false);
      setScore(score - PENALTY_POINTS);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null); 
        setIsCorrect(null); 
        setTimeLeft(MAX_TIME); 
        setUserInput(''); 
        setIsButtonDisabled(false); // Reativa o botão quando a próxima pergunta carregar
      } else {
        setShowScore(true);
        localStorage.setItem('quizScore', score); // Armazena a pontuação no local storage
      }
    }, 2000);
  };

  // Função para lidar com múltipla escolha
  const handleAnswerOptionClick = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    const correctAnswer = questions[currentQuestion].answer;

    if (selectedOption === correctAnswer) {
      setIsCorrect(true);
      const pointsEarned = calculatePoints(BASE_POINTS_NORMAL);
      setScore(score + Math.floor(pointsEarned));
    } else {
      setIsCorrect(false);
      setScore(score - PENALTY_POINTS);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null); 
        setIsCorrect(null); 
        setTimeLeft(MAX_TIME);
      } else {
        setShowScore(true);
        localStorage.setItem('quizScore', score); // Armazena a pontuação no local storage
      }
    }, 2000);
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          {score > 0 ? (
            <>
              <h2>Sua pontuação foi: {score}!</h2>
              <p>Você terminou o quiz.</p>
            </>
          ) : (
            <p>Nenhuma pontuação salva. Iniciando o quiz...</p>
          )}
        </div>
      ) : (
        questions.length > 0 && (
          <div>
            <div className="question-section">
              <div className="question-count">
                <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">{questions[currentQuestion].question}</div>
            </div>
            <div className="score-display">Pontuação total: {score}</div>

            {questions[currentQuestion].type === "checksum" || questions[currentQuestion].type === "parity" ? (
              <div>
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value.replace(/[^0-9]/g, ''))} // Aceita apenas números
                  placeholder="Digite sua resposta"
                  style={{ fontSize: '1.5rem', fontFamily: 'Nunito', padding: '10px', width: '80%' }}
                />
                <button onClick={handleAnswerSubmit} disabled={isButtonDisabled}>Enviar Resposta</button>
              </div>
            ) : (
              <div className="answer-section">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(option)}
                    disabled={selectedAnswer !== null}
                    className={selectedAnswer === option 
                      ? isCorrect 
                        ? 'correct-answer' 
                        : 'incorrect-answer' 
                      : ''}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Quiz;

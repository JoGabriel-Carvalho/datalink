import React, { useState, useEffect } from 'react';
import questionsData from '../Util/questions'; // Correção na importação

// Função para embaralhar as perguntas (algoritmo Fisher-Yates)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const MAX_TIME = 10; // 10 segundos por pergunta
const MAX_POINTS = 100; // Pontuação máxima por pergunta
const PENALTY_POINTS = 10; // Penalidade ajustada para 10 pontos

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0); // Pontuação total
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null); 
  const [isCorrect, setIsCorrect] = useState(null); 
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(MAX_TIME); // Tempo restante para calcular pontuação

  useEffect(() => {
    // Embaralhar as perguntas no início do quiz
    setQuestions(shuffleArray([...questionsData]));
  }, []);

  // Controla o temporizador em segundo plano, mas não mostra o tempo
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Lida com a seleção de uma resposta
  const handleAnswerOptionClick = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    const correctAnswer = questions[currentQuestion].answer;

    // Se a resposta estiver correta, calcula a pontuação com base no tempo restante
    if (selectedOption === correctAnswer) {
      setIsCorrect(true);
      const pointsEarned = (timeLeft / MAX_TIME) * MAX_POINTS;
      setScore(score + Math.floor(pointsEarned)); // Atualiza a pontuação total
    } else {
      setIsCorrect(false);
      // Penaliza o jogador por resposta errada com 10 pontos
      setScore(score - PENALTY_POINTS); // Penalidade ajustada para 10 pontos
    }

    // Aguarda 2 segundos antes de ir para a próxima pergunta
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null); 
        setIsCorrect(null); 
        setTimeLeft(MAX_TIME); // Reseta o tempo para a próxima pergunta
      } else {
        setShowScore(true);
      }
    }, 2000);
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          Você fez {score} pontos de um máximo possível de {questions.length * MAX_POINTS}!
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
            <div className="score-display">Pontuação total: {score}</div> {/* Exibe a pontuação total */}
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
          </div>
        )
      )}
    </div>
  );
};

export default Quiz;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../questions';
import { QuizState } from '../types';
import { usePostHog } from 'posthog-js/react'

const Quiz: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: [],
  })
  const navigate = useNavigate()
  const posthog = usePostHog()

  React.useEffect(() => {
    posthog.capture('quiz_started', {
      questions: questions.length})
  }, [])

  const handleAnswer = (answer: string) => {
    posthog.capture('question_answered', {question: questions[quizState.currentQuestionIndex].text, answer})
    const newAnswers = [...quizState.answers, answer];
    if (quizState.currentQuestionIndex < questions.length - 1) {
      setQuizState({
        currentQuestionIndex: quizState.currentQuestionIndex + 1,
        answers: newAnswers,
      });
    } else {
        posthog.capture('quiz_completed', {answers: newAnswers})
      navigate('/results', { state: { answers: newAnswers } });
    }
  };

  const currentQuestion = questions[quizState.currentQuestionIndex];

  return (
    <div>
      <h2>Coffee Quiz</h2>
      <h3>{currentQuestion.text}</h3>
      {currentQuestion.options.map((option: string, index: number) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Quiz;
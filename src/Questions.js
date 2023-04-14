import React from "react";
import TestResult from "./TestResult";
import { useGlobalContext } from "./context";

const Questions = () => {
  const {
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
    isSecondModalOpen,
  } = useGlobalContext();

  const { question, incorrect_answers, correct_answer } = questions[index];

  // const answers = [...incorrect_answers, correct_answer];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <section className='questions-section'>
      {isSecondModalOpen ? (
        <TestResult />
      ) : (
        <article className='quiz'>
          <p className='correct-answers'>
            correct answers : {correct}/{index}
          </p>
          <article className='container'>
            <h2 dangerouslySetInnerHTML={{ __html: question }} />
            <div className='btn-container'>
              {answers.map((answer, index) => {
                return (
                  <button
                    key={index}
                    className='answer-btn'
                    onClick={() => checkAnswer(correct_answer === answer)}
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                );
              })}
            </div>
          </article>
          <button className='next-question' onClick={nextQuestion}>
            next
          </button>
        </article>
      )}
    </section>
  );
};

export default Questions;

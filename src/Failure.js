import React from "react";
import { useGlobalContext } from "./context";
console.log();
const Failure = () => {
  const {
    isModalOpen,
    closeModal,
    correct,
    questions,
    setCenter,
    handleSubmit,
    fetchQuestions,
    url,
    isSecondModalOpen,
    closeSecondModal,
  } = useGlobalContext();
  console.log("isSecondModalOpen", isSecondModalOpen);
  return (
    <div className={isModalOpen ? "modal-container isOpen" : "modal-container"}>
      <div className='modal-content'>
        <h2>Not passed</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </p>
        <div className='failure-btn-wrapper'>
          <button className='close-btn play-again' onClick={closeSecondModal}>
            play again
          </button>
          <button className='close-btn back-to-map' onClick={closeModal}>
            back to map
          </button>
        </div>
      </div>
    </div>
  );
};

export default Failure;

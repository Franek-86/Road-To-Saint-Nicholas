import React from "react";
import { useGlobalContext } from "./context";

const Congratulations = () => {
  const {
    isModalOpen,
    closeModal,
    correct,
    questions,
    setCenter,
    showOctopus,
    setIsPassed,
    isPassed,
    closeSecondModal,
    locationIndex,
    endJourney,
    end,
  } = useGlobalContext();
  let closeResultsAndShowCricket = () => {
    if (locationIndex === 4) {
      console.log("fine");
      closeSecondModal();
      endJourney();
    } else {
      showOctopus();
      closeSecondModal();
    }
  };

  return (
    <div className={isModalOpen ? "modal-container isOpen" : "modal-container"}>
      <div className='modal-content'>
        <h2>congrats!</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </p>
        <button className='close-btn' onClick={closeResultsAndShowCricket}>
          {locationIndex === 4 ? "close " : "back to map"}
        </button>
      </div>
    </div>
  );
};

export default Congratulations;

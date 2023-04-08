import React from "react";
import { FaTrophy } from "react-icons/fa";
import { useGlobalContext } from "./context";
const End = () => {
  const {
    start,
    reStart,
    closeModal,
    locationIndex,
    questions,
    setCenter,
    handleSubmit,
    fetchQuestions,
    url,
    isSecondModalOpen,
    closeSecondModal,
    startJourney,
    nextLocation,
    setLocationIndex,
    setWaiting,
    setLocIndex,
  } = useGlobalContext();

  return (
    <section className='end-section'>
      <div className='end-wrapper'>
        <article className='end-icon'>
          <FaTrophy />
        </article>
        <article className='end-text'>
          <p>
            You successfully completed the <span>"road to Saint Nicholas"</span>{" "}
            quiz tour.
          </p>
          <div className='end-btn-container'>
            <button className='btn end-btn'>end quiz</button>
            <button onClick={reStart} className='btn start-again-btn'>
              back to intro
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default End;

// <div className='failure-btn-wrapper'>
//   <button className='close-btn play-again' onClick={closeSecondModal}>
//     play again
//   </button>
//   <button className='close-btn back-to-map' onClick={closeModal}>
//     back to map
//   </button>
// </div>;

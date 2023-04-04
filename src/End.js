import React from "react";
import { FaTrophy } from "react-icons/fa";

const End = () => {
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
            <button className='btn end-btn'>end</button>
            <button className='btn start-again-btn'>start again</button>
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

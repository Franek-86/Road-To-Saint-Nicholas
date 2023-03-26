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
        </article>
      </div>
    </section>
  );
};

export default End;

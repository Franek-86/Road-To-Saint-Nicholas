import React from "react";
import { useGlobalContext } from "./context";
const Start = () => {
  const { startJourney } = useGlobalContext();
  return (
    <section className='start-section'>
      <div className='banner'>
        <div className='start-banner'>
          <h1 className='header-title'>
            road to <br /> saint nicholas
          </h1>
          <h3 className='header-sub'> city quiz tour</h3>
        </div>
        <button className='btn start-btn' onClick={startJourney}>
          start journey
        </button>
      </div>
    </section>
  );
};

export default Start;

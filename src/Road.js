import React from "react";
import bus from "./bus.png";
import { useGlobalContext } from "./context";
var treesArr = Array.apply(null, { length: 20 });
var linesArr = Array.apply(null, { length: 40 });

const Road = () => {
  const {
    center,

    locationIndex,

    slide,
  } = useGlobalContext();
  return (
    <section
      className={
        locationIndex === 0
          ? `road-section`
          : `road-section slide-road-section${slide}`
      }
    >
      <div className='road-trees-wrapper'>
        {treesArr.map((i, index) => {
          return (
            <div key={index} className='road-trees-base'>
              <div className='road-trees-green'></div>
            </div>
          );
        })}
      </div>
      <div className='road-steps-wrapper'>
        {center.map((i, index) => {
          return (
            <div key={index} className={`road-step step-${index}`}>
              <div
                className={
                  index === locationIndex ? `road-bus show-bus` : `road-bus`
                }
              >
                <img src={bus} alt='bus-pic' />
              </div>
              <div className='road-oct'></div>
            </div>
          );
        })}
      </div>

      <div className='road-wrapper'>
        <div className='road-lines-wrapper'>
          {linesArr.map((i, index) => {
            return <div key={index} className='road-line'></div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Road;

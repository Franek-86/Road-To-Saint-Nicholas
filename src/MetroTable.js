import React from "react";
import { useGlobalContext } from "./context";
const MetroTable = () => {
  const { center, locationIndex } = useGlobalContext();
  let weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let hours = new Date().getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = new Date().getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  if (month < 10) {
    month = `0${month}`;
  }
  let date = new Date().getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let day = weekDays[new Date().getDay()];
  let time = `${hours}:${minutes}`;

  return (
    <section className='metro-stops-section'>
      <div className='metro-wrapper'>
        <div className='metro-header'>
          <h2 className='metro-name'>
            bus line: <span className='metro-stop-name'>rtsn</span>
          </h2>
          <div className='date-wrapper'>
            <h2>
              {day} {date}/{month}/{year} <span className='time'>{time}</span>
            </h2>
          </div>
        </div>
        <div className='metro-stops'>
          <ul className='metro-stop-list'>
            {center.map((i, index) => {
              return (
                <li
                  className={
                    index === locationIndex
                      ? `metro-stop metro-stop-${index} `
                      : `metro-stop metro-stop-${index} metro-stop-blur`
                  }
                  key={index}
                >
                  <p>
                    {/* {i[0]} {index === locationIndex && <MdRoom />} */}
                    {i[0]}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MetroTable;

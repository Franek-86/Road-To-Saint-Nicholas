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
  let minutes = new Date().getMinutes();

  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  if (month < 10) {
    month = `0${month}`;
  }
  let date = new Date().getDate();
  let day = weekDays[new Date().getDay()];
  let time = `${hours}:${minutes}`;
  console.log(month);

  return (
    <section className='metro-stops-section'>
      <div className='metro-wrapper'>
        <div className='metro-header'>
          <h2>
            bus line: <span className='metro-stop-name'>rtsn</span>
          </h2>
          <div className='date-wrapper'>
            <h2>
              {day} {date}/{month}/{year}{" "}
            </h2>
            <h2>{time}</h2>
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

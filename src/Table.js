import React from "react";
import { useGlobalContext } from "./context";
import { MdLocationPin } from "react-icons/md";
import { MdRoom } from "react-icons/md";
import MetroTable from "./MetroTable";

const Table = () => {
  let test = true;
  const { center, locationIndex } = useGlobalContext();
  if (test) {
    return <MetroTable />;
  }
  return (
    <section className='bus-table-section'>
      <div className='table-wrapper'>
        <div className='table-header'>
          <h2>
            bus line: <span className='bus-line-name'>rtsn</span>
          </h2>
        </div>
        <div className='table-stops'>
          <h4>stops at:</h4>
          {center.map((i, index) => {
            return (
              <ul className='table-stop-list'>
                <li
                  className={
                    index === locationIndex
                      ? `table-stop table-stop-${index} `
                      : `table-stop table-stop-${index} table-stop-blur`
                  }
                >
                  <p>
                    {i[0]} {index === locationIndex && <MdRoom />}
                  </p>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Table;

import React from "react";
import { useGlobalContext } from "./context";
import Congratulations from "./Congratulations";
import Failure from "./Failure";

const TestResult = () => {
  const { isModalOpen, closeModal, correct, questions, setCenter } =
    useGlobalContext();
  let flag;

  const result = ((correct / questions.length) * 100).toFixed(0);

  if (result >= 0) {
    flag = true;
  } else {
    flag = false;
  }

  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className='modal-content'>
        {flag ? <Congratulations /> : <Failure />}
      </div>
    </div>
  );
};

export default TestResult;

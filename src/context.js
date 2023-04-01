import axios from "axios";

import React, { useState, useContext, useEffect } from "react";

const tempUrl =
  "https://opentdb.com/api.php?amount=2&category=21&difficulty=easy&type=multiple";
const AppContext = React.createContext();

const table = {
  games: 15,
  sport: 21,
  geography: 22,
  history: 23,
  politics: 24,
  Musicals_And_Theatres: 13,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";
let localization;
const setLocIndex = () => {
  if (localStorage.getItem("locationIndex")) {
    localization = parseInt(localStorage.getItem("locationIndex"));
  } else {
    localization = 0;
  }
  return localization;
};

const AppProvider = ({ children }) => {
  const [locationIndex, setLocationIndex] = useState(setLocIndex());
  console.log("c", locationIndex);
  const [center, setCenter] = useState([
    ["airport", { lat: 41.1376372629904, lng: 16.765180540261554 }],
    ["duomo", { lat: 41.12859815408936, lng: 16.86877482698253 }],
    ["theatre", { lat: 41.12366528257363, lng: 16.872688445798705 }],
    ["games", { lat: 41.10871623899713, lng: 16.886143782588302 }],
    ["stadium", { lat: 41.085503141131355, lng: 16.84006701608872 }],
  ]);

  const [start, setIsStart] = useState(true);
  const [end, setIsEnd] = useState(false);
  const [isPassed, setIsPassed] = useState(false);
  const [url, setUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(0);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [quiz, setQuiz] = useState({
    amount: "",
    category: "",
    difficulty: "",
    text: "",
  });

  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };
  const startJourney = () => {
    setIsStart(false);
  };

  const endJourney = () => {
    setIsEnd(true);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
  };
  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
  };
  const closeModal = () => {
    setWaiting(true);
    setCorrect(0);
    setIsModalOpen(false);
  };

  const nextLocation = () => {
    if (locationIndex > center.length - 1) {
      console.log("the end");
      setLocationIndex(0);
    } else {
      let nextPlace = parseInt(locationIndex) + 1;
      setLocationIndex(nextPlace);
      localStorage.setItem("locationIndex", nextPlace);
    }
  };
  console.log("contectLocationIndex", locationIndex);
  const showCricket = () => {
    closeModal();
    setIsPassed(true);
  };
  const hideCricket = () => {
    setIsPassed(false);
  };
  const nextQuestion = () => {
    if (index > questions.length - 1) {
      setIndex(0);
    }
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        openSecondModal();
        return 0;
      } else {
        return index;
      }
    });
    console.log(index);
  };
  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestion();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;
    const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
    setUrl(url);
    fetchQuestions(url);
  };

  return (
    <AppContext.Provider
      value={{
        center,
        isModalOpen,
        loading,
        error,
        waiting,
        questions,
        index,
        correct,
        isSecondModalOpen,
        quiz,
        url,
        locationIndex,
        isPassed,
        start,
        end,
        showCricket,
        setCenter,
        setQuiz,
        closeModal,
        openSecondModal,
        closeModal,
        openModal,
        handleSubmit,
        checkAnswer,
        nextQuestion,
        fetchQuestions,
        closeSecondModal,
        nextLocation,
        hideCricket,
        startJourney,
        endJourney,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

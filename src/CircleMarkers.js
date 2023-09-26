import React from "react";
import { useGlobalContext } from "./context";
import {
  FeatureGroup,
  TileLayer,
  Marker,
  CircleMarker,
  ImageOverlay,
  Circle,
  Polyline,
  Polygon,
  Rectangle,
  Popup,
  SVGOverlay,
  LayerGroup,
  useMap,
  useMapEvents,
  MapContainer,
  isPassed,
} from "react-leaflet";
const CircleMarkers = () => {
  const {
    openModal,
    isPassed,
    handleSubmit,
    isModalOpen,
    setQuiz,
    center,
    setCenter,
    locationIndex,
    nextLocation,
    hideCricket,
    reStart,
    test,
    slide,
    slideRoad,
    loadQuiz,
  } = useGlobalContext();
  const blackOptions = { color: "black" };
  const brownOption = { color: "#cc660e" };
  const redOptions = { color: "red" };
  const fillRedOptions = { color: "red", fillColor: "white" };
  const purpleOptions = { color: "purple" };

  let circleArr = Array.apply(null, { length: center.length });

  return circleArr.map((i, index) => {
    return (
      <CircleMarker
        key={index}
        className={locationIndex === index ? "stop" : "disappear"}
        center={center[index][1]}
        pathOptions={brownOption}
        stroke={brownOption}
        radius={20}
        eventHandlers={{
          click: () => {
            openModal();
            // slideRoad();
            loadQuiz();
          },
        }}
      ></CircleMarker>
    );
  });
};

export default CircleMarkers;

import { React, useState, useEffect } from "react";
import { useRef } from "react";
import { useGlobalContext } from "./context";
import "leaflet/dist/leaflet.css";
import VectorTileLayer from "react-leaflet-vector-layer";
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
import cricket from "./cricket.png";
console.log("test1", "ciao1");
const Map = () => {
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
  } = useGlobalContext();
  console.log("test2", "ciao2");
  // const markers = useRef();

  // if (markers.current) {
  //   let arr = [...markers.current.children];
  //   // console.log(arr);
  //   let test1234 = arr.filter((i) => {
  //     if (i.classList.value !== locationIndex.toString()) {
  //       console.log("aoooooooo");
  //     }

  //     console.log(i.classList.value);
  //     console.log("locationIndex", locationIndex);
  //     return i.classList.value !== locationIndex.toString();
  //   });
  //   console.log("test1234", test1234);
  //   test1234.forEach((i) => {
  //     console.log(i);
  //     console.log(i.style.display);
  //     i.style.display = "none";
  //   });
  // }
  const blackOptions = { color: "black" };
  const brownOption = { color: "#cc660e" };
  const redOptions = { color: "red" };
  const fillRedOptions = { color: "red", fillColor: "white" };
  const purpleOptions = { color: "purple" };

  const FlyToButton = ({ latlng }) => {
    const map = useMap(); // available when component nested inside MapContainer
    const fly = () => {
      map.flyTo(latlng, 17, { duration: 2 });
      setTimeout(() => {
        hideCricket();
        nextLocation();
      }, 3000);
    };
    console.log("locationIndex", locationIndex);
    return (
      <>
        <button onClick={fly}>
          <img className='flyToBtn' src={cricket} alt='no' />;
        </button>
      </>
    );
  };

  return (
    <MapContainer
      style={{ width: "100%", height: "100%" }}
      center={center[locationIndex][1]}
      zoom={17}
      scrollWheelZoom={false}
      eventHandlers={{
        click: () => {
          console.log("marker clicked");
        },
      }}
    >
      <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png'
      />
      l
      <VectorTileLayer
        styleUrl='mapbox://styles/customstyles/ckpslkwor05q318mzmetjbv5z'
        accessToken='XXXX'
      />
      {isPassed ? (
        <FlyToButton
          latlng={
            center[locationIndex + 1] ? center[locationIndex + 1][1] : null
          }
        />
      ) : null}
      {/* -----------------circle markers----------------- */}
      {!isPassed ? (
        <>
          <CircleMarker
            className={locationIndex === 0 ? "stop" : "disappear"}
            center={[41.1376372629904, 16.765180540261554]}
            pathOptions={brownOption}
            stroke={brownOption}
            radius={20}
            eventHandlers={{
              click: () => {
                openModal();
                setQuiz({
                  amount: 3,
                  category: "geography",
                  difficulty: "easy",
                  text: `Welcome to the Karol Wojtyła Airport of Bari, starting point of our quiz tour trough the wonderful city of Bari. We are in the capital city of the Metropolitan City of Bari and of the Apulia region, on the Adriatic Sea, southern Italy. Are you good in geography? Lets's test it out!`,
                });
              },
            }}
          ></CircleMarker>

          <CircleMarker
            className={locationIndex === 1 ? "stop" : "disappear"}
            center={[41.12859815408936, 16.86877482698253]}
            pathOptions={purpleOptions}
            radius={20}
            eventHandlers={{
              click: () => {
                openModal();
                setQuiz({
                  amount: 3,
                  category: "history",
                  difficulty: "easy",
                  text: `First stop of our tour is the Duomo di Bari or Cattedrale di San Sabino is the cathedral of Bari. The present building was constructed between the late 12th and late 13th centuries, mostly in the last thirty years of the 12th century, and was built on the site of the ruins of the Imperial Byzantine cathedral destroyed in 1156 by William I of Sicily known as the Wicked (il Malo).`,
                });
              },
            }}
          >
            <Popup>
              Basilica Cattedrale Metropolitana Primaziale San Sabino
            </Popup>
          </CircleMarker>

          {console.log("li", locationIndex)}
          <CircleMarker
            className={locationIndex === 2 ? "stop" : "disappear"}
            center={[41.12366528257363, 16.872688445798705]}
            pathOptions={redOptions}
            radius={20}
            eventHandlers={{
              click: () => {
                openModal();
                setQuiz({
                  amount: 3,
                  category: "Musicals_And_Theatres",
                  difficulty: "easy",
                  text: `The Teatro Petruzzelli is the largest theatre of the city of Bari and the fourth Italian theatre by size. In the 1980s, the theatre hosted two major operatic debuts, that of Iphigénie en Tauride by Niccolò Piccinni and the Neapolitan version of Bellini's I Puritani. Both events contributed to making the city world-famous. In addition to operas, ballets, big concerts as well as concerts of light music were presented `,
                });
              },
            }}
          >
            <Popup>Teatro Petruzzelli</Popup>
          </CircleMarker>

          <CircleMarker
            className={locationIndex === 3 ? "stop" : "disappear"}
            center={[41.10871623899713, 16.886143782588302]}
            pathOptions={blackOptions}
            radius={20}
            eventHandlers={{
              click: () => {
                openModal();
                setQuiz({
                  amount: 2,
                  category: "games",
                  difficulty: "medium",
                  text: `Before going to a football match why don't we stop for some video games and a beer at "Lobby E-Games", are you an maybe an expert of video games? This quiz requires good knowledge of them as it is not one of the easier of this tour.`,
                });
              },
            }}
          >
            <Popup>Airport</Popup>
          </CircleMarker>

          <CircleMarker
            className={locationIndex == "4" ? "stop" : "disappear"}
            center={[41.085503141131355, 16.84006701608872]}
            pathOptions={fillRedOptions}
            radius={20}
            eventHandlers={{
              click: () => {
                openModal();
                setQuiz({
                  amount: 3,
                  category: "sport",
                  difficulty: "easy",
                  text: "Welcome to the 'San Nicola' stadium, temple of the glorious SSC Bari football team as well as last stop of our tour trough the amazing city of Bari.",
                });
              },
            }}
          >
            <Popup>Stadium</Popup>
          </CircleMarker>
        </>
      ) : null}
      {/* -----------------circle markers----------------- */}
      {/* const polyline = [ [51.49, -0.08], [51.48, -0.1], [51.51, -0.12],
        [51.53, -0.09], [51.53, -0.05], ]; */}
      {/* <Polyline pathOptions={brownOption} positions={polyline} /> */}
      {/* <FeatureGroup pathOptions={purpleOptions}>
          <Popup>Popup in FeatureGroup</Popup>
        </FeatureGroup> */}
    </MapContainer>
  );
};

export default Map;

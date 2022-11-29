import "./Star.css";
import StarImg from "../../assets/images/Star.png";
import Favorites from "../favorites/Favorites";
import { useState, useRef } from "react";

const Star = () => {
  const pinF = useRef(null);
  const pinS = useRef(null);
  const pinT = useRef(null);
  const pinFo = useRef(null);

  const [pin, setPin] = useState(false);
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  const theOnePin = 5814;
  const allPins = [pin1, pin2, pin3, pin4];

  const allNumberPins = allPins.map((letter) => {
    return Number(letter);
  });
  const x = Number(allNumberPins.join(""));

  const oneFunction = () => {
    if (x === theOnePin) {
      setPin(true);
    } else {
      setPin1("");
      setPin2("");
      setPin3("");
      setPin4("");
    }
  };

  return (
    <div className="star-section">
      <label htmlFor="first" className="starLabel">
        <p className="Info">PIN:</p>
        <input
          ref={pinF}
          id="first"
          className="pinInput"
          type="text"
          value={pin1}
          maxLength={1}
          autoComplete="off"
          onChange={(e) => {
            setPin1(e.target.value);
            if (pinF !== "") {
              pinS.current.focus();
            }
          }}
        />
        <input
          ref={pinS}
          id="second"
          className="pinInput"
          type="text"
          value={pin2}
          maxLength={1}
          autoComplete="off"
          onChange={(e) => {
            setPin2(e.target.value);
            if (pinS !== "") {
              pinT.current.focus();
            }
          }}
        />
        <input
          ref={pinT}
          id="third"
          className="pinInput"
          type="text"
          value={pin3}
          maxLength={1}
          autoComplete="off"
          onChange={(e) => {
            setPin3(e.target.value);
            if (pinT !== "") {
              pinFo.current.focus();
            }
          }}
        />
        <input
          ref={pinFo}
          id="forth"
          className="pinInput"
          value={pin4}
          type="text"
          maxLength={1}
          autoComplete="off"
          onChange={(e) => {
            setPin4(e.target.value);
          }}
        />
        <button
          className="pinBtn"
          onClick={() => {
            oneFunction();
          }}
        >
          Go!
        </button>
      </label>
      <img className="starImg" src={StarImg} alt="Star For More Info" />
      <p className="thePin Info">5814</p>
      {pin && (
        <div>
          <Favorites />
        </div>
      )}
    </div>
  );
};

export default Star;

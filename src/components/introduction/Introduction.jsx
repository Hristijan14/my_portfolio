import React from "react";
import "./Introduction.css";
import Me from "../../assets/images/Me.jpg";

const Introduction = () => {
  return (
    <div className="introduction-container">
      <img className="myImg" src={Me} alt="Me" />
      <div className="myInfo">
        <h1>Hristijan Pavlovski</h1>
        <p>
          <b>Birth:</b> 07/06/1998
        </p>
        <p>
          <b>Adress:</b> Metodija Shatorov Sharlo 7
        </p>
        <p>
          <b>Phone:</b> 071-345-820
        </p>
        <p>
          <b>E-mail:</b> kiko@cvkp.mk
        </p>
      </div>
    </div>
  );
};

export default Introduction;

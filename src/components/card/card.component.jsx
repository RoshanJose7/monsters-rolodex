import React from "react";
import "./card.styles.css";

const card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x200`}
      />
      <h2>{props.monster.name}</h2>
      <h4>{props.monster.email}</h4>
    </div>
  );
};

export default card;

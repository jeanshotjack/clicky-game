import React from "react";


const Card = props => (
  <div className="card col-3 border-0 mb-2 align-items-center" onClick={() => props.counter(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;
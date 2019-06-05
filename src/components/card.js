import React from "react";
import "./card.css";

const Card = (props) => {
  console.log(props)
  return (
    <div className="col-3 py-4">
      <div className="card" onClick={() => props.clicker(props.id)}>
        <img src={props.image} className="card-img-top" alt={props.name} />
      </div>
    </div>
  )
}

export default Card
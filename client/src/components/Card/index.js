import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" style= {{width:550 }} >
      {props.children}
    </div>
  );
}

export default Card; 
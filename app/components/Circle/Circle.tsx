import React from "react";
import "./Circle.css";
function Circle({ text }: string) {
  return (
    <div id="circle-container">
      <div id="cc">
        <div className="circle" id="five"></div>
        <div className="circle" id="four"></div>
        <div className="circle" id="three"></div>
        <div className="circle" id="two"></div>
        <div className="circle" id="one">
          {text}
        </div>
      </div>
    </div>
  );
}

export default Circle;

import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  function handelClick() {
    const newColor = getRandomColor()
    onChangeColor(newColor)
  }
  return <div onClick={handelClick} 
  className="child" 
  style={{ backgroundColor: color }} />;
}

export default Child;

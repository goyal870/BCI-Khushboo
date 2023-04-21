import { FaPencilAlt, FaEraser, FaTools, FaPaintBrush, FaMagic, FaFill, FaCircle, FaSquare, FaYenSign, } from 'react-icons/fa';
import { BsTriangleFill } from 'react-icons/bs'
import React, { useState, useContext } from 'react';
import Palette from './Palette';
import "./Toolbox.css";
import BrushSizeMenu from './Brushsize';
import BlinkingText from "./Blink.js";
import { ColorContext, ColorProvider } from '../context/ColorContext';
import { handleEraserToggle } from './Canvas';
import { EraserSizeContext } from "../context/EraserContext";

const Toolbox = ({ opt }) => {

  const handleClick = (option) => {
    opt(option)
  }

  const { isErasing, setIsErasing } = useContext(EraserSizeContext);
  // const [optt , setOption] = useState("");

  return (
    <>
          {/* <div className="heading">Select Options</div> */}

    <div className="buttons-container">

      <BlinkingText colorP={<button onClick={() => { setIsErasing(false); opt("Brush") }}>Brush<FaPaintBrush /></button>} freq={300}>

      </BlinkingText>

      <BlinkingText colorP={<button onClick={() => { setIsErasing(true); opt("Eraser") }} name="erase">Eraser <FaEraser /></button>} freq={1000}></BlinkingText>



      <BlinkingText colorP={<button onClick={() => { setIsErasing(false); opt("Pencil") }}>Pencil<FaPencilAlt /></button>} freq={1000}></BlinkingText>



      <BlinkingText colorP={<button onClick={() => opt("FillColor")}>FillColor<FaFill /></button>} freq={400}></BlinkingText>


      <BlinkingText colorP={<button onClick={() => opt("Tool")} name="tool" >Tools<FaTools /> </button>} freq={500}></BlinkingText>

      <BlinkingText colorP={<button onClick={() => opt("Color")} name="color">Color<FaMagic /></button>} freq={600}></BlinkingText>
      <div
        className="selection"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <p>Selected Option - </p>
        <input type="text"
          style={{ width: "50%", maringBottom: "10px" }}
          value={opt}
          readOnly />
      </div>
    </div>
    </>
  );
};

export default Toolbox;


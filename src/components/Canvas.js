import "./canvas.css";
import React, { useRef,useState, useEffect, useContext } from 'react';
import Toolbox from "./Toolbox";
import { ColorContext } from "../context/ColorContext";
import BrushSizeSelector from "./Brushsize";
import { BrushSizeContext } from "../context/BrushContext";
import { EraserSizeContext } from "../context/EraserContext";
import { ToolContext } from "../context/ToolContext";

const Canvas = () => {
//  const[brushSize, setBrushSize]= useState(10);
  const {selectColor} = useContext(ColorContext)
  const canvasRef = useRef(null);
  const [isPainting, setIsPainting] = useState(false);
  const [mousePosition, setMousePosition] = useState(undefined);
  const [context, setContext] = useState(null);
  const { brushSize , setBrushSize} = useContext(BrushSizeContext);
  const {isErasing, eraserSize,setIsErasing} = useContext(EraserSizeContext);
  const [startposition,setStartPosition] = useState("");
  const {shape} = useContext(ToolContext);



  const canvasOffSetX = useRef(null);
  const canvasOffSetY = useRef(null);
  const startX = useRef(null);
  const startY = useRef(null);

  // useEffect(() => {

  //   const canvas = canvasRef.current;
  //   canvas.width = canvas.offsetWidth;
  //   canvas.height = canvas.offsetHeight;
  //   const ctx = canvas.getContext('2d');
  //   ctx.fillStyle = 'white';
  //   ctx.strokeStyle = selectColor;
  //   ctx.lineWidth = brushSize;

  //   canvas.style.border = " solid gray 1px"
  //   ctx.fillRect(0, 0, canvas.width, canvas.height);
  // }, [selectColor , brushSize ]);
  useEffect(() => {
    initializeCanvas();
  }, [selectColor , brushSize]);

  const initializeCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.fillStyle = 'white';
    ctx.strokeStyle = selectColor;
    ctx.lineWidth = brushSize;

    canvas.style.border = 'solid gray 0.5px';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };
    const startPaint = (event) => {
      console.log(event)
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setIsPainting(true);
      setMousePosition(coordinates);
      setStartPosition(coordinates);
    }
    if (isErasing) {
      erase(coordinates);
    }
    if (shape === "cir") {
      setStartPosition(coordinates);
    }
    if (shape === "diamond") {
      setStartPosition(coordinates);
    }
    if (shape === "tri") {
      setStartPosition(coordinates);
    }
  };

  const stopPaint = () => {
    setIsPainting(false);
    setMousePosition(undefined);
  };

  const paint = (event) => {
    
    // if(shape === 'rect'){
    //   drawRectangle();
    // }

    if (isPainting) {
      const newMousePosition = getCoordinates(event);
      if (mousePosition && newMousePosition) {
        if (isErasing) {
          erase(newMousePosition);
        }else if (shape === "rect"){
          drawRectangle(startposition,newMousePosition);
        }else if (shape === "cir") {
          drawCircle(startposition, newMousePosition);
        }
        else if (shape === "diamond") {
          drawDiamond(startposition, newMousePosition);
        }
        else if (shape === "tri") {
          drawTriangle(startposition, newMousePosition);
        }
        else {
          drawLine(mousePosition, newMousePosition);
        
        }
        setMousePosition(newMousePosition);
      }
    }
  };

  const drawRectangle = (startPosition, endPosition) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = endPosition.x - startPosition.x;
    const height = endPosition.y - startPosition.y;
    context.beginPath();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeRect(startPosition.x, startPosition.y, width, height);
    // context.stroke();
  };
  const drawTriangle = (startPosition, endPosition) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(startPosition.x, startPosition.y);
  
    const dx = endPosition.x - startPosition.x;
    const dy = endPosition.y - startPosition.y;
    const sideLength = Math.sqrt(dx * dx + dy * dy); // calculate the length of the side using Pythagoras' theorem
    const angle = Math.atan2(dy, dx); // calculate the angle of the line between the two points
    const thirdPointX = startPosition.x + sideLength * Math.cos(angle + (2 * Math.PI) / 3); // calculate the x coordinate of the third point using the angle and side length
    const thirdPointY = startPosition.y + sideLength * Math.sin(angle + (2 * Math.PI) / 3); // calculate the y coordinate of the third point using the angle and side length
    context.lineTo(endPosition.x, endPosition.y);
    context.lineTo(thirdPointX, thirdPointY);
    context.closePath();
    context.stroke();
  };
  
  
  

  const drawCircle = (startPosition, endPosition) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const radius = Math.sqrt(Math.pow(endPosition.x - startPosition.x, 2) + Math.pow(endPosition.y - startPosition.y, 2));
    context.beginPath();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.arc(startPosition.x, startPosition.y, radius, 0, 2 * Math.PI);
    context.stroke();
  };
  
  const drawDiamond = (startPosition, endPosition) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = endPosition.x - startPosition.x;
    const height = endPosition.y - startPosition.y;
    context.beginPath();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.moveTo(startPosition.x + width / 2, startPosition.y);
    context.lineTo(endPosition.x, startPosition.y + height / 2);
    context.lineTo(startPosition.x + width / 2, endPosition.y);
    context.lineTo(startPosition.x, startPosition.y + height / 2);
    context.closePath();
    context.stroke();
  };
  

  const getCoordinates = (event) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    return { x: event.pageX - canvas.offsetLeft, y: event.pageY - canvas.offsetTop };
  };

  const drawLine = (originalMousePosition, newMousePosition) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.beginPath();
    // context.lineWidth = 50;
    
    context.moveTo(originalMousePosition.x, originalMousePosition.y);
    context.lineTo(newMousePosition.x, newMousePosition.y);
    context.stroke();
  };
  const erase = (position) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = 'white';
    context.beginPath();

    context.rect(position.x, position.y, eraserSize , eraserSize);
    context.fill();
  };

  const handleEraserToggle = (isErasing) => {
 setIsErasing(isErasing);
};



  return (
    
    <div className="canvas-container">
     
     
      {/* <Toolbox context={context}/>   */}
    <canvas ref={canvasRef} className="responsive-canvas"
    // onClick={() => handleEraserToggle(!isErasing)}
    onMouseDown={startPaint}
          onMouseUp={stopPaint}
          onMouseMove={paint} />
           {/* <BrushSizeSelector onBrushSizeChange={handleBrushSizeChange} /> */}
        
  </div>
  );

};

export default Canvas;

import React ,{ useContext, useState }from 'react';
import "./Brushsize.css";
import BlinkingText from './Blink.js';
import { BrushSizeContext } from '../context/BrushContext';

  const Brushsize = (props) => {
    const [currentBrushSize, setCurrentBrushSize] = useState("");
    const {brushSize, setBrushSize} = useContext(BrushSizeContext); // set default brush size to 10


    const brushClick = (option)=>{
      switch (option) {
        case "Small":
          setCurrentBrushSize(1);
          setBrushSize(1);  // set brush size to 5 when "Small" is clicked
          break;
        case "Medium":
          setCurrentBrushSize(5);
          setBrushSize(5);  // set brush size to 10 when "Medium" is clicked
          break;
        case "Large":
          setBrushSize(7); // set brush size to 15 when "Large" is clicked
          break;
        case "Extra Large":
          setCurrentBrushSize(9.5);
          setBrushSize(9.5);  // set brush size to 20 when "Extra Large" is clicked
          break;
        default:
          setCurrentBrushSize(""); // set brush size to default when no option is selected
      }
      props.opt("Toolbox")

      // opt(option);
    }

  return (
    <div className="buttons-container"> 
        <BlinkingText colorP={<button onClick={()=>brushClick("Small")} name="small">Small</button>} freq={100}></BlinkingText>
    
    
        <BlinkingText colorP={<button onClick={()=>brushClick("Medium")} name="medium">Medium</button>} freq={200}></BlinkingText>
      
    
        <BlinkingText colorP={<button onClick={()=>brushClick("Large")} name ="large">Large</button>} freq={300}>
         
        </BlinkingText>
     
     
        <BlinkingText colorP={<button onClick={()=>brushClick("Extra Large")} name="extralarge">Extra Large</button>} freq={400}></BlinkingText>      
        <div className="brush-size-indicator" style={{ width: currentBrushSize, height: currentBrushSize, borderRadius: currentBrushSize / 2 }}></div>
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
                    style={{ width: "50%" , maringBottom : "10px" }}
                    value={currentBrushSize}
                    readOnly/>
            </div>
    </div>
    

  );
};

export default Brushsize;

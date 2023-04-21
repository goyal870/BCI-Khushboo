import React ,{ useContext, useState }from 'react';
import "./Brushsize.css";
import BlinkingText from './Blink.js';
import { EraserSizeContext } from '../context/EraserContext';
  const Erasersize = (props) => {
    const [currentEraserSize, setCurrentEraserSize] = useState("");
    const {eraserSize, setEraserSize, setIsErasing} = useContext(EraserSizeContext); // set default brush size to 10
    // const [isErasing, setIsErasing] = useState(false);

    const brushClick = (option)=>{
      // if(setIsErasing(true))
      switch (option) {
        case "Small":
            setCurrentEraserSize(30);
            setEraserSize(30);  // set brush size to 5 when "Small" is clicked
          break;
        case "Medium":
            setCurrentEraserSize(50);
            setEraserSize(50);  // set brush size to 10 when "Medium" is clicked
          break;
        case "Large":
            setEraserSize(70);
          setCurrentEraserSize(70); // set brush size to 15 when "Large" is clicked
          break;
        case "Extra Large":
            setCurrentEraserSize(120);
            setEraserSize(120);  // set brush size to 20 when "Extra Large" is clicked
          break;
        default:
          setCurrentEraserSize(""); // set brush size to default when no option is selected
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
        <div className="brush-size-indicator" style={{ width: currentEraserSize, height: currentEraserSize, borderRadius: currentEraserSize / 2 }}></div>
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
                    value={currentEraserSize}
                    readOnly/>
            </div>
    </div>
    

  );
};

export default Erasersize;

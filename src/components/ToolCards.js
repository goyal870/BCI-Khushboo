import React,{useState, useEffect, useContext} from 'react';
import Toolbox from './Toolbox';
import Palette from './Palette';
import Brushsize from './Brushsize';
import Erasersize from './Eraser';
import Tool from './Tool';
import { EraserSizeContext } from "../context/EraserContext";
import { ToolContext } from '../context/ToolContext';


const ToolCards =(props)=>{

    const [option, setOption] = useState("Toolbox");

    const {isErasing, setIsErasing} = useContext(EraserSizeContext);
    
    const {shape, setShape} = useContext(ToolContext)


    const opt = (option)=>{
        console.log(option)
        setOption(option)
        // if(option != "Eraser"){
        //     setIsErasing(false)
        // }
    }

    useEffect(()=>{

    },[option])
    
    if(option === "Toolbox"){
        return(
            <Toolbox opt={opt} />
            )
    }
    else if(option === "Color"){
        return(
            
            <Palette opt={opt} />
            )
            
    }
    else if(option === "Pencil"){
        setShape("")
        return(
            <Brushsize opt={opt}/>
        )
    }
    else if(option === "Eraser"){
        return(
            <Erasersize opt={opt}/>
        )
    }else if(option === "Tool"){
        return(
            <Tool opt={opt}/>
        )
    }
    else if(option === "FillColor"){
        return(
            <Palette opt={opt} />
            )
            
    }
    

    }
export default ToolCards;
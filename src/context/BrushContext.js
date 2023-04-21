import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import { ToolContext } from './ToolContext';

export const BrushSizeContext = createContext();

export const BrushSizeProvider = ({ children }) => {
  const [brushSize, setBrushSize] = useState(10); 
  const[shape,setShape]=useState("");
  // set default brush size to 10

  return (
    <BrushSizeContext.Provider value={{ brushSize, setBrushSize , shape,setShape }}>
      {children}
    </BrushSizeContext.Provider>
  );
};

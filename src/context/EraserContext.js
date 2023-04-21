import React, { createContext, useState } from 'react';

export const EraserSizeContext = createContext();

export const EraserSizeProvider = ({ children }) => {
  const [eraserSize, setEraserSize] = useState(10); // set default brush size to 10
  const [isErasing, setIsErasing] = useState(false);
  return (
    <EraserSizeContext.Provider value={{ eraserSize, setEraserSize,isErasing, setIsErasing }}>
      {children}
    </EraserSizeContext.Provider>
  );
};

// import React from "react";
import { Route } from "react-router-dom";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Canvas from "./components/Canvas";
import Palette from "./components/Palette";
import Toolbox from "./components/Toolbox";
// import Button from './Button';
import Shapes from "./components/Shapes"
import { ColorProvider } from "./context/ColorContext";
import ToolCards from "./components/ToolCards";
import { BrushSizeProvider } from "./context/BrushContext";
import { EraserSizeProvider } from "./context/EraserContext";
import { ToolProvider } from "./context/ToolContext";


function App() {
  return (
    <>
      <Router>
        <div>
          <ColorProvider>
            <BrushSizeProvider>
              <EraserSizeProvider>
                <ToolProvider>
                  <Navbar />
                  <div className="app-div-container">
                    <ToolCards />

                    <Canvas />

                  </div>
                </ToolProvider>
              </EraserSizeProvider>
            </BrushSizeProvider>
          </ColorProvider>

          {/* 
    </ColorProvider>
      <Palette/> */}
          {/* <Shapes/> */}

          <Footer />

        </div>
      </Router>

    </>
  );
}

export default App;

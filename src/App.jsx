import React from 'react';
import BlackOutName from './components/BlackOutName';
import AnimatedCursor from "react-animated-cursor";
import LandingPage from './components/LandingPage';
import './App.css'
const App = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={15}
        outerSize={30}
        color="255, 255, 255" 
        outerAlpha={0.3}
        innerScale={1}
        outerScale={2}
      />
      <BlackOutName />
      <LandingPage />
    </>
  );
}

export default App;

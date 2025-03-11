import React from 'react';
import BlackOutName from './components/BlackOutName';
import AnimatedCursor from "react-animated-cursor";

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
    </>
  );
}

export default App;

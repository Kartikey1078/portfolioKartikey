import React from "react";
import BlackOutName from "./components/BlackOutName";
import AnimatedCursor from "react-animated-cursor";
import LandingPage from "./components/LandingPage";
import "./App.css";
import UserContext from "./components/UserContext"; // ✅ Correct import
import About from "./components/About";

const App = () => {
  return (
    <>
    <UserContext> 
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
    </UserContext>
    <About></About>
    </>
  );
};

export default App;

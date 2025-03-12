import React from "react";
import BlackOutName from "./components/BlackOutName";
import AnimatedCursor from "react-animated-cursor";
import LandingPage from "./components/LandingPage";
import "./App.css";
import UserContext from "./components/UserContext"; // ✅ Correct import

const App = () => {
  return (
    <UserContext> {/* ✅ Make sure this is wrapping everything */}
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
  );
};

export default App;

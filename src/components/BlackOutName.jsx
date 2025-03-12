import React, { useState, useLayoutEffect, useContext } from "react";
import { useSpring, animated } from "@react-spring/web";
import { DataContext } from "./UserContext"; 

function BlackOutName() {
  const [toggle, setToggle] = useState(false);
  const [hide, setHide] = useState(false);
  const { setISTrue } = useContext(DataContext);

  useLayoutEffect(() => {
    setToggle(true);
    const timer = setTimeout(() => {
      setToggle(false);
      setHide(true);
      setISTrue(true);
    }, 2000); // Slightly reduced duration for a snappier effect

    return () => clearTimeout(timer);
  }, [setISTrue]);

  const move = useSpring({
    from: { 
      top: "65%", 
      left: "50%", 
      transform: "translate(-50%, -50%)", 
      opacity: 0 
    },
    to: toggle
      ? { top: "50%", opacity: 1 }
      : { opacity: 0 },
    config: { tension: 200, friction: 20 }, // More natural easing
  });

  const moveUp = useSpring({
    from: { height: "100vh" },
    to: hide ? { height: "0vh" } : { height: "100vh" },
    config: { duration: 600 },
  });

  return (
    <animated.div
      style={moveUp}
      className="relative w-screen h-screen bg-black overflow-hidden"
    >
      <animated.p
        style={{ position: "absolute", ...move }}
        className="text-cyan-50 border-2 border-white rounded-full p-3 w-[200px] text-center text-xl 
        animate-pulse shadow-[0_0_20px_#00FFFF,0_0_40px_#FF00FF,0_0_60px_#FFFF00]"
      >
        KARTIKEY TYAGÎ
      </animated.p>
    </animated.div>
  );
}

export default BlackOutName;

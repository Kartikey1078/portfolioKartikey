import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

function BlackOutName() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(true); 
  }, []);

  const move = useSpring({
    from: {
      top: "65%", 
      left: "50%",
      transform: "translate(-50%, -50%)",
      opacity: 0, 
    },
    to: toggle
      ? {
        top: "50%", 
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: 1, 
        }
      : {}, 
    config: { tension: 100, friction: 50 },
  });

  return (
    <div className="relative w-[100vw] h-[100vh] bg-black">
      <animated.p
        style={{ position: "absolute", ...move }} 
        className="text-cyan-50 border-2 bgText border-white rounded-full p-3 w-[200px] text-center text-xl"
      >
        KARTIKEY TYAGÎ
      </animated.p>
    </div>
  );
}

export default BlackOutName;

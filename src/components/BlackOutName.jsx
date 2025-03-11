import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

function BlackOutName() {
  const [toggle, setToggle] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setToggle(true);
    const timer = setTimeout(() => {
      setToggle(false);
      setHide(true);
    }, 2500);

    return () => clearTimeout(timer);
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
          opacity: 1,
        }
      : { opacity: 0 },
    config: { duration: 500 }, // Smooth and fast animation (0.5s)
  });

  const moveUp = useSpring({
    from: { height: "100vh" },
    to: hide ? { height: "0vh" } : { height: "100vh" },
    config: { duration: 700 },
  });

  return (
    <animated.div style={moveUp} className="relative w-[100vw] bg-black overflow-hidden">
      <animated.p
        style={{ position: "absolute", ...move }}
        className="text-cyan-50 border-2 border-white rounded-full p-3 w-[200px] text-center text-xl"
      >
        KARTIKEY TYAGÎ
      </animated.p>
    </animated.div>
  );
}

export default BlackOutName;

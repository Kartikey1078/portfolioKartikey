import React, { useState, useEffect, useContext } from "react";
import { useSpring, animated } from "@react-spring/web";
import { DataContext } from "./UserContext"; // ✅ Import DataContext

function BlackOutName() {
  const [toggle, setToggle] = useState(false);
  const [hide, setHide] = useState(false);
  const { setISTrue } = useContext(DataContext); // ✅ Use DataContext

  useEffect(() => {
    setToggle(true);
    const timer = setTimeout(() => {
      setToggle(false);
      setHide(true);
      setISTrue(true); // ✅ Update context correctly
    }, 2500);

    return () => clearTimeout(timer);
  }, [setISTrue]); // ✅ Add dependency to useEffect

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
    <animated.div
      style={moveUp}
      className="relative w-[100vw] bg-black overflow-hidden"
    >
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

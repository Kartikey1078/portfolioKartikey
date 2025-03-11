import React from "react";
import vedio from "../assets/BGVedio.mp4";

const LandingPage = () => {
  return (
    <>
      <div>
        <video
          className="w-screen h-screen object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={vedio} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default LandingPage;

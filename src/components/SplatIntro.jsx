import { useEffect, useState } from "react";
import "./SplatIntro.css";

function SplatIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="splat-screen">

      {/* Goo stuck across the top of the screen */}
      <div className="top-goo">
        <div className="top-drip td1" />
        <div className="top-drip td2" />
        <div className="top-drip td3" />
        <div className="top-drip td4" />
        <div className="top-drip td5" />
        <div className="top-drip td6" />
      </div>

      {/* Main splat */}
      <div className="splat-center">

        <div className="splat-core" />

        {/* Chunky splatter arms */}
        <div className="arm a1" />
        <div className="arm a2" />
        <div className="arm a3" />
        <div className="arm a4" />
        <div className="arm a5" />
        <div className="arm a6" />
        <div className="arm a7" />
        <div className="arm a8" />

        {/* Smaller pieces */}
        <div className="glob g1" />
        <div className="glob g2" />
        <div className="glob g3" />
        <div className="glob g4" />
        <div className="glob g5" />
        <div className="glob g6" />

      </div>

    </div>
  );
}

export default SplatIntro;
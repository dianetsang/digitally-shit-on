import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
  useEffect(() => {
    function playFartOnClick() {
      const fart = document.getElementById("fart-audio");

      if (!fart) {
        return;
      }

      fart.currentTime = 0;
      fart.play().catch(() => {});
    }

    document.addEventListener("click", playFartOnClick);

    return () => {
      document.removeEventListener("click", playFartOnClick);
    };
  }, []);

  return (
    <>
      <audio id="take-the-l-audio" src="/take-the-l.mp3" loop preload="auto" />
      <audio id="fart-audio" src="/fart.mp3" preload="auto" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
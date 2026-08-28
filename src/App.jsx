import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
  useEffect(() => {
    function playAudioOnClick() {
      const music = document.getElementById("take-the-l-audio");
      const fart = document.getElementById("fart-audio");

      if (!music || !fart) {
        return;
      }

      music.play().catch(() => {});
      fart.currentTime = 0;
      fart.play().catch(() => {});
    }

    document.addEventListener("click", playAudioOnClick);

    return () => {
      document.removeEventListener("click", playAudioOnClick);
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
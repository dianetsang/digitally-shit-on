import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SplatIntro from "../components/SplatIntro";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  function playMusic() {
    const music = document.getElementById("take-the-l-audio");

    if (!music) {
      return;
    }

    music.play().catch(() => {});
  }

  function playFart() {
    const fart = document.getElementById("fart-audio");

    if (!fart) {
      return;
    }

    fart.currentTime = 0;
    fart.play().catch(() => {});
  }

  function startMusic() {
    playMusic();
    playFart();
  }

  useEffect(() => {
    playMusic();

    const splatTimer = setTimeout(() => {
      playFart();
    }, 180);

    const timer = setTimeout(() => {
      navigate("/gallery");
    }, 3000);

    return () => {
      clearTimeout(splatTimer);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <>
      <SplatIntro />

      <main>
        
      </main>

      <aside className="bait-popup" role="dialog" aria-labelledby="bait-title">
        <h2 id="bait-title"></h2>
        <p>Click to exit page.</p>
        <button type="button" onClick={startMusic}>
          Leave!
        </button>
      </aside>
    </>
  );
}

export default Home;
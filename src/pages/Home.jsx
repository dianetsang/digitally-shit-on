import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SplatIntro from "../components/SplatIntro";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  function startMusic() {
    const music = document.getElementById("take-the-l-audio");
    const fart = document.getElementById("fart-audio");

    if (!music || !fart) {
      return;
    }

    music.play().catch(() => {});
    fart.currentTime = 0;
    fart.play().catch(() => {});
  }

  useEffect(() => {
    startMusic();

    const timer = setTimeout(() => {
      navigate("/gallery");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <>
      <SplatIntro />

      <main>
        <h1>Digitally Shit On</h1>
        <p>LOL you've been digitally shit on!! HAHA LOSER</p>
      </main>

      <aside className="bait-popup" role="dialog" aria-labelledby="bait-title">
        <h2 id="bait-title"></h2>
        <p>Click to exit page.</p>
        <button type="button" onClick={startMusic}>
          Click to claim
        </button>
      </aside>
    </>
  );
}

export default Home;
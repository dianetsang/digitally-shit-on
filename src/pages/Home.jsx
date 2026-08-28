import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SplatIntro from "../components/SplatIntro";

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
    }, 1000);

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
    </>
  );
}

export default Home;
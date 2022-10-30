import React from "react";
import useSound from "use-sound";
import boopSfx from "./audio/Piada.mp3";

function Sound() {
  const [play] = useSound(boopSfx);
  return <button onClick={play}>%$*:?ç</button>;
}
export default Sound;

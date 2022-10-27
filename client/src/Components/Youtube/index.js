import "./styles.css";
import YouTube from "react-youtube";

export default function FucYoutube() {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 1,
      showinfo: 1,
      mute: 0,
      loop: 1
    }
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <YouTube videoId="mDYqT0_9VR4" opts={videoOptions} />
    </div>
  );
}
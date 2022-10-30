import {StylesYoutube} from "./styles.js";
import YouTube from "react-youtube";

function Fucyoutube() {
    const videoOptions = {
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
          mute: 1,
          loop: 1
        }
      };
      return (
        <div>
          
          <StylesYoutube>  
          <p>Cinemetic Champion</p>     
          <YouTube videoId="hjPS3j5XNss" opts={videoOptions} />
          </StylesYoutube>
        </div>
      );
}
export default Fucyoutube;



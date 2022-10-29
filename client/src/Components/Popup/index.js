import React, { useState } from 'react';
import ReactModal from 'react-modal';
import {HomeImage, HomeTitle, HomeText, ButonStyle } from "./styles";
import VideoPlayer from "react-background-video-player";
import Aurelion from "./video/Aurelion1.mp4";
 
function Popup() {
  const [isOpen, setIsOpen] = useState(true);
 
  return (
    <div>
   
        <div>
        <ReactModal
            isOpen={isOpen}
     
            //onRequestClose={() => setIsOpen(false)}
        
        >
      <VideoPlayer
  
        src={
          Aurelion
        }
        autoPlay={true}
        muted={false}
      />
      <div>
      <HomeImage>  
        
        <p>Você DFeja entrar no site mesmo ?</p>
  
        <ButonStyle onClick={() => setIsOpen(false)}>
                Sim
            </ButonStyle>
           
    </HomeImage>
      </div>
      </ReactModal>
    </div>

    </div>
  );
}
 
export default Popup;
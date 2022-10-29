import React, { useState } from 'react';
import ReactModal from 'react-modal';
import {HomeImage, HomeTitle, HomeText, ButonStyle } from "./styles";
 
function Popup() {
  const [isOpen, setIsOpen] = useState(true);
 
  return (
    <div>
   

        <ReactModal
            isOpen={isOpen}
            contentLabel="Example Modal"
            //onRequestClose={() => setIsOpen(false)}
        
        >
            <HomeImage>        
        <p>Runeterra</p>
        <ButonStyle>
        <button onClick={() => setIsOpen(false)}>
                Open Modal
            </button>
        </ButonStyle>        
    </HomeImage>
      </ReactModal>


      
    </div>
  );
}
 
export default Popup;
import React from "react";
import { Title } from "../../Pages/PaginaOriginal/styles";
import "./index.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  background: "#b5c6c2"
};


export default function Poppy () {
    return (
      <>
    <div className="title"><Title>Rotas</Title></div>
    <div style={styles}>
    <div class="container">
    <div className="card-container">
      <div className="card">
        <div className="front"> </div>
        <div className="back"></div>
      </div>

      <div className="card-container">
      <div className="card">
      <div className="front2"> </div>
        <div className="back2"></div>
      </div>
      </div>

      <div className="card-container">
      <div className="card">
      <div className="front3"> </div>
        <div className="back3"></div>
      </div>
      </div>

      <div className="card-container">
      <div className="card">
      <div className="front4"> </div>
        <div className="back4"></div>
      </div>
      </div>

      <div className="card-container">
      <div className="card">
      <div className="front5"> </div>
        <div className="back5"></div>
      </div>
      </div>

    </div>
  </div>
  </div>
  </>
  )

}


    
  
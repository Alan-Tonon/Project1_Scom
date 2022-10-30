import React, { Component } from "react";
import "./styles.css";
import Fala from "./audio/AudioShaco.mp3";

class ProgressBar extends Component {
  state = {
    progress: 10,
    name: "hello"
  };

  handleIncrement = () => {
    if (this.state.progress < 100) {
      this.setState(
        (prevState) => ({ progress: prevState.progress + 13 }),
        () => console.log(this.state.progress)
      );
    } else {
      this.setState({ progress: 100 });
      alert("O Shaco te encontrou cuidado hi hi");
      window.open("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg", "minhaJanela", "height=2000px,width=2000px, position: center, width: 80%, display:block, height: 1000px");
      var audio = new Audio(Fala);
      audio.play();
      
      
    }
  };

  handleDecrement = () => {
    if (this.state.progress > 0) {
      this.setState(
        (prevState) => ({ progress: prevState.progress - 13 }),
        () => console.log(this.state.progress)
      );
    } else {
      this.setState({ progress: 0 });
      alert("Bortão Incorreto !");
      
    }
  };

  render() {
    let { progress } = this.state;
    let test = progress + "%";
    let style = { width: test };

    return (
      <div>
        <div className="flex-container">
          <div className="progress" data-label={`${test} completed`}>
            <span className="value" style={style} />
          </div>
          <br />
          <div>
            <button className="button" onClick={this.handleDecrement}>
              -
            </button>
            <button className="button" onClick={this.handleIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
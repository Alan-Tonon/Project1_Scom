import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";
import "./styles.scss";

const Cell = ({
  backgroundImageUrl,
  textTitle,
  textSubTitle,
  textDescription,
  imageUrl,
  imageAlt
}) => {
  const css = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
   
  };

  const handleOnClick = event => {
    event.persist();
    console.log(event);
  };

  return (
    <div className="carousel-cell" style={css}>
      <div className="carousel-overlay" />
      <div className="carousel-content" onClick={handleOnClick}>
        <h2>{textTitle}</h2>
        <h3>{textSubTitle}</h3>
        <p>{textDescription}</p>
        <img style={{ height: "48px",  }} alt={imageAlt} src={imageUrl} />
      </div>
    </div>
  );
};

const carouselItems = [
  {
    backgroundImageUrl:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_0.jpg",

  },

  {
    backgroundImageUrl:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",

  },

  {
    backgroundImageUrl:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg",

  },

  {
    backgroundImageUrl:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nilah_0.jpg",

  },
  
];

function eventLogger(ev) {
  console.log(ev.type, ev.target);
}

export default function Carroselpure() {
  return (
    <div>
      <div className="title"><p>Campeões Muito Fortes</p></div>
      <div className="container">
        
      
        
      </div>
              <CarouselProvider
            visibleSlides='2'
            naturalSlideWidth={245}
            naturalSlideHeight={245}
            totalSlides={carouselItems.length}
          >
            <div className="carousel-container">
              <div className="carousel-gradient">
                <Slider>
                  {carouselItems.map((carouselItem, index) => (
                    <Slide onFocus={eventLogger} index={1} key={index}>
                      <Cell {...carouselItem} />
                    </Slide>
                  ))}
                </Slider>
                <ButtonBack className="carousel-button-back">&lsaquo;</ButtonBack>
                <ButtonNext className="carousel-button-next">&rsaquo;</ButtonNext>
                <DotGroup className="carousel-dots" />
              </div>
            </div>
          </CarouselProvider>

    </div>
  );
}
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

// Flickity is commercial
// https://www.w3.org/WAI/tutorials/carousels/
// http://shouldiuseacarousel.com/
// https://www.smashingmagazine.com/2016/07/ten-requirements-for-making-home-page-carousels-work-for-end-users/
// Find alternatives :)

// Use Next.js, see usecase Hulu

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
    backgroundSize: "cover"
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
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1371&q=80",
    textTitle: "First slide",
    textSubTitle: "This is a subtitle",
    textDescription: "Lorem bla...",
  },

  {
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1371&q=80",
    textTitle: "First slide",
    textSubTitle: "This is a subtitle",
    textDescription: "Lorem bla...",
  },

  {
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1371&q=80",
    textTitle: "First slide",
    textSubTitle: "This is a subtitle",
    textDescription: "Lorem bla...",
  },
  
];

function eventLogger(ev) {
  console.log(ev.type, ev.target);
}

export default function Carroselpure() {
  return (
    <div className="App">
      <div className="container">
        <h1>Page title</h1>
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
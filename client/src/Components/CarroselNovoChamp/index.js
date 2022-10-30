import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "./styles.css";
import { Title } from "../../Pages/PaginaOriginal/styles";

const srcList = [
  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nilah_0.jpg",
  "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt58b3304a9d38b091/60f5d6e21929bc58854d00a6/072221_AkshanChampionTheme_Banner.jpg",
  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_0.jpg"
];
export default function CarroselLanc() {
  return (
    <div className="App">
      <Title>CAMPEÕES LANÇAMENTOS</Title>
      <Images srcList={srcList} time={3000} />
    </div>
  );
}

function Images(props) {
  const { srcList = [], time = 1000 } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  useEffect(() => {
    const timer = setTimeout(() => {
      const next = (currentIndex + 1) % srcList.length;
      setCurrentIndex(next);
      setNextIndex(next + 1);
    }, time);
    return () => clearTimeout(timer);
  });
  return (
    <div className="container">
      {srcList.map((src, index) => {
        return (
          <ImageItem
            src={src}
            className={classnames({
              item: true,
              cur: index === currentIndex,
              next: index === nextIndex
            })}
          />
        );
      })}
    </div>
  );
}

function ImageItem(props) {
  const { src = "", className } = props;
  return (
    <div className={className}>
      <img src={src} alt="" />
    </div>
  );
}

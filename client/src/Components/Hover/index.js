import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./styles.css";

function Logo({ background, hoverBackground }) {
  const Logo = styled.div`
    background: ${props => `url(${props.background}) no-repeat top center`};
    height: 300px;
    width: 450px;
    background-size: cover;
    display: inline-block;
    margin-right: 40px;
    margin-top: 50px;
    &:hover {
      background: ${props => `url(${props.hoverBackground}) no-repeat top center`};
      background-size: cover;
      height: 300px;
      width: 450px;
      display: inline-block;
      margin-right: 40px;
      margin-top: 50px;
    }
  `;

  return (
    <Logo
      background={background}
      hoverBackground={hoverBackground}
      className="logoContent"
    />
  );
}

export default function HoverSkin() {
  const logos = [
    {
      url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg",
      hoverUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_1.jpg"
    },
    {
      url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg",
      hoverUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_1.jpg"
    },
    {
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg",
        hoverUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_1.jpg"
    },
    {
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg",
        hoverUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_1.jpg"
    },
    {
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg",
        hoverUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_2.jpg"
    },
    {
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg",
        hoverUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_4.jpg"
    },
    {
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg",
        hoverUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_1.jpg"
    },
    {
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rell_0.jpg",
        hoverUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rell_1.jpg"
    },
    {
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renata_0.jpg",
        hoverUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renata_1.jpg"
    }

  ];

  return (
    <div className="App">
      <p> Algumas Skins </p>
      <div className="logoCard">
        {logos.map((item, index) => (
          <Logo
            key={index}
            background={item.url}
            hoverBackground={item.hoverUrl}
          />
        ))}
      </div>
    </div>
  );
}

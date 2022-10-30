import React from "react";
import "./styles.css";

import ModalImage from "./modal_champions/index";

import aatrox from "./image_champiors/aatrox.jpg";
import ahri from "./image_champiors/ahri.jpg";
import akali from "./image_champiors/akali.jpg";

import akshan from "./image_champiors/akshan.jpg";
import alistas from "./image_champiors/alistar.jpg";
import amumu from "./image_champiors/amumu.jpg";

import anivia from "./image_champiors/anivia.jpg";
import annie from "./image_champiors/annie.jpg";
import aphelios from "./image_champiors/aphelios.jpg";

import ashe from "./image_champiors/ashe.jpg";
import aurelionsol from "./image_champiors/aurelionsol.jpg";
import azir from "./image_champiors/azir.jpg";

import bardo from "./image_champiors/bardo.jpg";
import belveth from "./image_champiors/belveth.jpg";
import blitzcrank from "./image_champiors/blitzcrank.jpg";

import brand from "./image_champiors/brand.jpg";
import braum from "./image_champiors/braum.jpg";
import caitlyn from "./image_champiors/caitlyn.jpg";
import { Title } from "../../Pages/PaginaOriginal/styles";

export default class Champions extends React.Component {
  render() {
    return (
        <>
        
      <div>

        
      

      </div>
      
      <div className="ImageColumn"
          style={{
            display: `flex`
          }}
        >
        <article class="championsPage_23K7">
          <Title>Campeões</Title>
        <ul class="champsListUl_2Lmb">
          <ModalImage
            src={aatrox}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />

          <ModalImage
            src={ahri}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          <ModalImage
            src={akali}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          </ul>

          <ul class="champsListUl_2Lmb">
          <ModalImage
            src={akshan}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          <ModalImage
            src={alistas}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          <ModalImage
            src={amumu}
      

            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          </ul>

          <ul class="champsListUl_2Lmb">
          <ModalImage
            src={anivia}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          <ModalImage
            src={annie}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          <ModalImage
            src={aphelios}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          </ul>

          <ul class="champsListUl_2Lmb">
          <ModalImage
            src={ashe}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          <ModalImage
            src={aurelionsol}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          <ModalImage
            src={azir}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          </ul>

          <ul class="champsListUl_2Lmb">
          <ModalImage
            src={bardo}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          <ModalImage
            src={belveth}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          <ModalImage
            src={blitzcrank}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          </ul>

          <ul class="champsListUl_2Lmb">
          <ModalImage
            src={brand}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          <ModalImage
            src={braum}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          <ModalImage
            src={caitlyn}
            alt={<a href="https://universe.leagueoflegends.com/pt_BR/champions/">Conheça o Site Oficial</a>}
            ratio={`3:2`}
          />
          </ul>

          </article>
          
        </div>

    </>



    );
  }
}
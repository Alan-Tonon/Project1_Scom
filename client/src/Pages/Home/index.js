/* eslint-disable jsx-a11y/alt-text */
import {HomeImage, HomeTitle, HomeText, ButonStyle, HomeFlex, YtbFlex, Map} from "./styles";

import Card from "../../Components/BoxFlip/Crd";

import "../../Components/BoxFlip/styles.css";
import ScrollButton from "../../Components/ScrollBack/index";

//import Popup from "../../Components/Popup/index";

import FucYoutube from "../../Components/Youtube/index";

import React, {useEffect, useState} from 'react'
import axios from 'axios'

import LoLmap from '../../image/LoLmap.png'

//map things 
import {MapContainer,ImageOverlay, Popup, Marker, Tooltip} from 'react-leaflet'

const Home = () => {
    const [backendData, setBackendData] = useState([])

    useEffect(()=>{
        axios.get('/api')
        .then(function(res){
            setBackendData(res.data)
            console.log(backendData)
        })
      },[])

      const bounds = [
        [-100, -100],
        [500, 500]
      ];

      const mbounds = [
        [-150, -150],
        [550, 550]
      ];

      const freljordPos= [67, 100]
      const demaciaPos= [30, 70]
      const noxusPos= [55, 210]
      const ioniaPos= [66, 360]
      const piltoverPos= [-10, 270]
      const aguasDeSentinaPos= [-30, 368]
      const targonPos= [-72, 145]
      const shurimaPos= [-67, 230]
      const ixtalPos= [-65, 295]
      const ilhaDasSombrasPos= [-68, 450]

    return (
    <HomeFlex>
    {/*<Popup/>*/}

    <MapContainer zoom = {1}  maxBounds = {mbounds} maxZoom={3} bounds = {bounds}>
        <ImageOverlay
            interactive={true}
            url= '../../../Map/LoLmap.jpg'
            bounds = {bounds}
            zIndex={10}
        />

        <Marker position={freljordPos}>
            <Popup>
                <p>{backendData.freljord}</p>
            </Popup>
            <Tooltip sticky>Freljord</Tooltip>
        </Marker>

        <Marker position={demaciaPos}>
            <Popup>
                <p>{backendData.demacia}</p>
            </Popup>
            <Tooltip sticky>Demacia</Tooltip>
        </Marker>

        <Marker position={noxusPos}>
            <Popup>
                <p>{backendData.noxus}</p>
            </Popup>
            <Tooltip sticky>Noxus</Tooltip>
        </Marker>

        <Marker position={ioniaPos}>
            <Popup>
                <p>{backendData.ionia}</p>
            </Popup>
            <Tooltip sticky>Ionia</Tooltip>
        </Marker>

        <Marker position={piltoverPos}>
            <Popup>
                <p>{backendData.piltover}</p>
            </Popup>
            <Tooltip sticky>Piltover e Zaun</Tooltip>
        </Marker>

        <Marker position={aguasDeSentinaPos}>
            <Popup>
                <p>{backendData.agua}</p>
            </Popup>
            <Tooltip sticky>Águas de Sentina</Tooltip>
        </Marker>

        <Marker position={ilhaDasSombrasPos}>
            <Popup>
                <p>{backendData.sombras}</p>
            </Popup>
            <Tooltip sticky>Ilha Das Sombras</Tooltip>
        </Marker>

        <Marker position={targonPos}>
            <Popup>
                <p>{backendData.targon}</p>
            </Popup>
            <Tooltip sticky>Targon</Tooltip>
        </Marker>

        <Marker position={ixtalPos}>
            <Popup>
                <p>{backendData.ixtal}</p>
            </Popup>
            <Tooltip sticky>Ixtal</Tooltip>
        </Marker>

        <Marker position={shurimaPos}>
            <Popup>
                <p>{backendData.shurima}</p>
            </Popup>
            <Tooltip sticky>Shurima</Tooltip>
        </Marker>


    </MapContainer>

    <HomeText>
        <p>{backendData.text}</p>
    </HomeText>

    <YtbFlex>
        {
        //<FucYoutube/>
        }
    </YtbFlex>
    </HomeFlex>
   );
  }
  
export default Home;



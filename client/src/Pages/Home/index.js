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

      const freljordPos= [67, 100]
      const demaciaPos= [30, 70]
      const noxusPos= [55, 210]
      const ioniaPos= [66, 360]
      const piltoverPos= [-10, 270]
      const aguasDeSentinaPos= [-68, 450]
      const targonPos= [-72, 145]
      const shurimaPos= [67, 100]
      const ixtalPos= [67, 100]
      const ilhaDasSombrasPos= [-68, 450]


    return (
    <HomeFlex>
    {/*<Popup/>*/}

    <MapContainer zoom = {1}  maxBounds = {bounds} maxZoom={3} bounds = {bounds}>
        <ImageOverlay
            interactive={true}
            url= '../../../Map/LoLmap.jpg'
            bounds = {bounds}
            zIndex={10}
          />

        <Marker position={freljordPos}>
            <Popup>
                Freljord
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
                Noxus
            </Popup>
            <Tooltip sticky>Noxus</Tooltip>
        </Marker>

        <Marker position={ioniaPos}>
            <Popup>
                Ionia
            </Popup>
            <Tooltip sticky>Ionia</Tooltip>
        </Marker>

        <Marker position={piltoverPos}>
            <Popup>
                Piltover e Zaun
            </Popup>
            <Tooltip sticky>Piltover e Zaun</Tooltip>
        </Marker>

        <Marker position={aguasDeSentinaPos}>
            <Popup>
                
            </Popup>
            <Tooltip sticky>Águas de Sentina</Tooltip>
        </Marker>

        <Marker position={ilhaDasSombrasPos}>
            <Popup>
                
            </Popup>
            <Tooltip sticky>Ilha Das Sombras</Tooltip>
        </Marker>

        <Marker position={targonPos}>
            <Popup>
                
            </Popup>
            <Tooltip sticky>Targon</Tooltip>
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



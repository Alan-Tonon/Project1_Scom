/* eslint-disable jsx-a11y/alt-text */
import {HomeImage, HomeTitle, HomeText, ButonStyle, HomeFlex, YtbFlex, Map} from "./styles";

import Card from "../../Components/BoxFlip/Crd";

import "../../Components/BoxFlip/styles.css";
import ScrollButton from "../../Components/ScrollBack/index";

import Popup from "../../Components/Popup/index";

import FucYoutube from "../../Components/Youtube/index";

import React, {useEffect, useState} from 'react'
import axios from 'axios'

import LoLmap from '../../image/LoLmap.png'

//map things 
import {MapContainer, TileLayer, ImageOverlay} from 'react-leaflet'

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

    return (
    <HomeFlex>
    {/*<Popup/>
    
    /*
    <HomeImage>

        <Map src = {LoLmap}/>

        <HomeTitle>
        <p>Runeterra</p>
        </HomeTitle>

        <ButonStyle>
        <button type="button">Begin exploring</button>
        </ButonStyle>  

        <div>
        <ScrollButton/>  
        </div>  

    </HomeImage> scrollWheelZoom={false} dragging={false} touchZoom={false} doubleClickZoom={false} 
    */}

    <MapContainer zoom = {1}  maxBounds = {bounds} maxZoom={3} bounds = {bounds}>
        {/*<TileLayer
            attribution="its offline"
            url={'../../../Map/LoLmap.jpg'} 
            noWrap={true}
        />*/}


        <ImageOverlay
            interactive={true}
            url= '../../../Map/LoLmap.jpg'
            bounds = {bounds}
            zIndex={10}
          />

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



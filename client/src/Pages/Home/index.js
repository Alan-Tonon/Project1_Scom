/* eslint-disable jsx-a11y/alt-text */
import {HomeImage, HomeText, HomeFlex, YtbFlex} from "./styles";

import WhatsApp from "../../Components/Whats_button/index";

import ScrollButton from "../../Components/ScrollBack/index";

import Popup from "../../Components/Popup/index";

import FucYoutube from "../../Components/Youtube/index";

import React, {useEffect, useState} from 'react';
import axios from 'axios'

const Home = () => {
    const [backendData, setBackendData] = useState([])

    useEffect(()=>{
        axios.get('/api')
        .then(function(res){
            setBackendData(res.data)
            console.log(backendData)
        })
      },[])

    return (
    <HomeFlex>
        <Popup/>
        <ScrollButton/> 
    <HomeImage>  
        <WhatsApp/>
            <p>Runeterra</p> 
             
    </HomeImage>
    

    <HomeText>
        <p>{backendData.text}</p>
    </HomeText>
    

    <YtbFlex>
        {
        <FucYoutube/>
        }
    </YtbFlex>


    </HomeFlex>
   );
  }
  
export default Home;



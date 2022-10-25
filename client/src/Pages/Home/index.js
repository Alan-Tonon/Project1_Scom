/* eslint-disable jsx-a11y/alt-text */
import {HomeImage, HomeTitle, HomeText, ButonStyle } from "./styles";
import Card from "./BoxFlip/Crd";
import "./BoxFlip/styles.css";

import React, {useEffect, useState} from 'react'
import axios from 'axios'


const Home = () => {


    
    /*
    const [backendData, setBackendData] = useState([])

    useEffect(()=>{
        axios.get('/api')
        .then(function(res){
            setBackendData(res.data)
            console.log(backendData)
        })
      },[])

      <p>{backendData.text}</p>

       */
    return (
     
    <div>
    <HomeImage>        
        <p>Runeterra</p>
        <ButonStyle>
        <button type="button">Begin exploring</button>
        </ButonStyle>        
    </HomeImage>

        

    </div>
   );
  }
  
export default Home;



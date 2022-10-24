/* eslint-disable jsx-a11y/alt-text */
import {HomeImage, HomeTitle, HomeText } from "./styles";


import React, {useEffect, useState} from 'react'
import axios from 'axios'

import LoLmap from '../../image/LoLmap.png'

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

    <div>
    <HomeTitle>
        Titulo
    </HomeTitle>

    <HomeImage>        
        <img src={LoLmap}/>  
    </HomeImage>


    <HomeText>

       <p>{backendData.text}</p>

    </HomeText>
    </div>
   );
  }
  
export default Home;



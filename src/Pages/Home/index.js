/* eslint-disable jsx-a11y/alt-text */
import {HomeImage, HomeTitle } from "./styles";
import React from 'react'
import LoLmap from '../../image/LoLmap.png'

const Home = () => {
    return (
    <>
    <HomeTitle>
        Titulo
    </HomeTitle>

    <HomeImage>
       <img src={LoLmap}/>  
    </HomeImage>
    </>
   );
  }
  
export default Home;



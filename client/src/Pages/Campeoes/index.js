import React from 'react';

import Champions from "../../Components/Champions/index";
import Carroselpure from "../../Components/Carrosel pure-react-carousel/index";
import CarroselLanc from "../../Components/CarroselNovoChamp/index";
import Poppy from "../../Components/Flip/index";
import Navbar from "../_Cabeçario/Navbar";
import HoverSkin from "../../Components/Hover/index";
export default function Batata() {

    return(
    <div>
        <>
        <Navbar/>
        <CarroselLanc/>

        <Carroselpure/>
        
        <Champions/>
        <HoverSkin/>
        <Poppy/>
        
        </>
    </div>
        

    )
};
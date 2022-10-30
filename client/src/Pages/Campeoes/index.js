import React from 'react';

import Champions from "../../Components/Champions/index";
import Carroselpure from "../../Components/Carrosel pure-react-carousel/index";
import CarroselLanc from "../../Components/CarroselNovoChamp/index";
import Poppy from "../../Components/Flip/index";


export default function Batata() {

    return(
    <div>
        <>
        <CarroselLanc/>

        <Carroselpure/>
        
        <Champions/>
        <Poppy/>
        </>
    </div>
        

    )
};
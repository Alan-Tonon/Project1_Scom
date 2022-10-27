/* eslint-disable jsx-a11y/alt-text */
import {HomeImage, HomeTitle, HomeText, ButonStyle } from "./styles";
import Card from "../../Components/BoxFlip/Crd";
import "../../Components/BoxFlip/styles.css";
import ScrollButton from "../../Components/ScrollBack/index";

import Popup from "../../Components/Popup/index";

import FucYoutube from "../../Components/Youtube/index";

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
        <Popup/>
    <HomeImage>        
        <p>Runeterra</p>
        <ButonStyle>
        <button type="button">Begin exploring</button>
        </ButonStyle>  
        <ScrollButton/>  
    </HomeImage>

    <HomeText>
    <p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

        A apenas vinte anos atrás, Runeterra se encontrava em rota de colisão com o desastre. Tão rapidamente que os habitantes de Runeterra reunirem-se em tribos, como em tempos antigos, tribos opostas recorriam a guerra para resolver suas disputas. Não importa a época, a escolha pela guerra sempre tem sido mágica. Exércitos eram fortalecidos ou dizimados igualmente pelas magias e runas. Os campeões fizeram a maioria dos itens mágicos forjados para eles, assim como lideraram ou suportaram exércitos. invocadores – frequentemente sendo na prática os líderes das forças políticas de Valoran – desencadeariam poderosos poderes mágicos diretamente contra os inimigos e suas posses com pouca consideração pelas consequencias. Com tal abundância de poder mágico bruto a sua disposição, havia pouca motivação para os invocadores de explorar formas mais abientalmente amigas de guerra
        Nos últimos duzentos anos, contudo, os perigos de uma guerra mágica não-supervisionada começaram a expor a fragilidade de Runterra para todos que residiam em Valoran. As últimas duas Guerras das Runas alteraram drasticamente a paisagem geofísica de Valoran, mesmo depois de focar a energia mágica para restaurá-la. Violentos terremotos e horríveis tempestades alimentadas por magia fizeram a vida em Valoran ser desafiante, mesmo antes do horror da guerra ser um fator na população. Foi teorizado que outra Guerra das Runas não-supervisionada poderia partir o mundo em pedaços.

        O Instituto da Guerra.
        Como forma de resposta direta ao crescimento físico e a instabilidade política do mundo, os magos-chave de Valoran – incluindo muitos invocadores poderosos – chegaram a conclusão que os conflitos deveriam ser resolvidos de uma forma controlada e sistemática. Eles formaram uma organização chamada A Liga das Lendas, cujo o propósito era supervisionar a resolução ordenada dos conflitos políticos em Valoran. Situado no Instituto da Guerra, seria dada à Liga a autoridade pelas entidades políticas de Valoran de governar os resultados do conflito organizado que ele iriam administrar.
        </p> 
    </HomeText>

        <FucYoutube/>
    </div>
   );
  }
  
export default Home;



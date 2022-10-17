import "./Classes.css"
import React from "react";

import {useEffect, useState} from 'react'
import axios from 'axios'

function Classes(){
    const[posts, setposts] = useState([]);

    //enviando função
    useEffect(()=>{
      axios.get('http://localhost/projetos/Project_World/world-app/api_react/')
      .then(function(res){
        setposts(res.data);
      })
    },[])

    return(
      <div className="Classes">
        {
        posts.map(function(val){
            return (
            <div className='containerClasse'>
                <img src = {val.imagem}></img>
                 <p>{val.conteudo}</p>
            </div>
            )
        })
        }
    </div>
    )
}

export default Classes;
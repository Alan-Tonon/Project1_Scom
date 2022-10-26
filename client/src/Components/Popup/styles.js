import styled from 'styled-components';

import LoLmap from '../../image/LoLmap.jpg'



export const HomeTitle = styled.div`
    background-color: #010;
    color: #FFFFFF;
    width: 100%;
    height 10%;
    margin: 0;

    font-size: 25px;
    
    display: flex;
    justify-content: center;
`
export const HomeImage = styled.div`

    background-color: #1C1C1C;
    background-image: url(${LoLmap});
    width: 100%;
    height 100%;
    display: flex;
    justify-content: center;
    
    font-weight: bold;
    letter-spacing: 0.05em;
    flex-direction: column;
    text-transform: uppercase;
    font-family: "Beaufort", Arial, sans-serif;
    font-size: 100px;
    color: #f0e6d2;
    letter-spacing: 0.03em;
    margin-bottom: 15px;

    align-items: center;
    justify-content: space-around;
    position: absolute;

   
`
export const ButonStyle = styled.div`
display: inline-block;
background-image: linear-gradient(#171b21,#171b21),linear-gradient(#c89b3c,#785a28);

background-clip: padding-box,border-box;
background-origin: padding-box,border-box;
border: 2px solid transparent;

border: 4px double #cccccc;
color: #e0ee;
text-align: center;
font-size: 28px;
padding: 20px;
width: 200px;
-webkit-transition: all 0.5s;
-moz-transition: all 0.5s;
-o-transition: all 0.5s;
transition: all 0.5s;
cursor: pointer;
margin: 5px;

font-weight: bold;
    letter-spacing: 0.05em;
    line-height: 100%;
    text-transform: uppercase;
    font-family: "Beaufort", Arial, sans-serif;
    font-size: 14px;
`

export const HomeText = styled.div`
    color:#FFFF;
    background-color: #010;
    font-size: 24px;
    width: 100%;
    height 10%;
    display: flex;
    justify-content: center;
    margin: 10px;
`
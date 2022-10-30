import styled from 'styled-components';

import Blood from './image/blood.gif'

export const HomeImage = styled.div`

width: 100%;
height 50%;
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

export const BackGround = styled.div`
background-image: url(${Blood});
background-color: #BB0A1E;



`
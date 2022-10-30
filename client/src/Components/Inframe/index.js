import Iframe from 'react-iframe'
import "./styles.css";
function Inframe() {
    return(
        
        <p align="center">
            <Iframe url="https://www.leagueoflegends.com/pt-br/"
        width="800px"
        height="800px"
        id=""
        className=""
        display="block"
    
        styles=
        {{
            
            position: "center",
            width: "80%",
            display:"block",
            height: "1000px",
    
        }}
           
        />
        </p>
        

    );
}

export default Inframe;

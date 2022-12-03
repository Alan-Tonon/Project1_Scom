import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import cabecario from "../../../Pages/Login/index";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

import Cuidado from "../../../Pages/Classes/index"
import Campeoes from "../../../Pages/Campeoes/index"
import Email from "../../../Pages/EnviarEmail/Index";
import OriginalWeb from "../../../Pages/PaginaOriginal/index";

import Song from "../../../Pages/_Cabeçario/Song"
import Map from "../../../Pages/Mapa";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <>
    
    
    <div className="RoutesApp">
    <BrowserRouter>
    
      <Fragment>
        <Routes>
          <Route exact path="/login" element={<Private Item={cabecario} />} />
          
          <Route path="/" element={<Signin />} />
          <Route exact path="signup" element={<Signup />} />
          <Route path="/originalweb" element={<OriginalWeb/>} />
          <Route path="/cuidado" element={<Cuidado/>} />
          <Route path="/campeoes" element={<Campeoes />} />
          <Route path="/email" element={<Email />} />
          <Route path="/autatication" element={<Email />} />
          <Route path="/mapa" element={<Map />} />

        </Routes>
      </Fragment>
    </BrowserRouter>
    </div>
    </>
  ); 
};

export default RoutesApp;
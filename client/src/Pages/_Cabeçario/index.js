import Navbar from "./Navbar"
import Home from "../Home/index"
import Cuidado from "../Classes/index"
import Campeoes from "../Campeoes/index"
import Email from "../EnviarEmail/Index";
import OriginalWeb from "../PaginaOriginal/index";
import { Route, Routes } from "react-router-dom"
import Song from "./Song"
import Map from "../Mapa";

function Top() {
  return (
    <>
      <Navbar/>
      <div className="Top">
        <Song/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/originalweb" element={<OriginalWeb/>} />
          <Route path="/cuidado" element={<Cuidado/>} />
          <Route path="/campeoes" element={<Campeoes />} />
          <Route path="/email" element={<Email />} />
          <Route path="/autatication" element={<Email />} />
          <Route path="/mapa" element={<Map />} />
        </Routes>
      </div>

    </>
  )
  }

  export default Top
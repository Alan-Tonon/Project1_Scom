import Navbar from "./Navbar"
import Home from "../Home/index"
import Classes from "../Classes/index"
import Raca from "../Raças/index"
import Email from "../EnviarEmail/Index";
import OriginalWeb from "../PaginaOriginal/index";
import { Route, Routes } from "react-router-dom"
import Song from "./Song"
import Dice from "../Dados/index"

function Top() {
  return (
    <>
      <Navbar/>
      <div className="Top">
        <Song/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/originalweb" element={<OriginalWeb/>} />
          <Route path="/Classes" element={<Classes/>} />
          <Route path="/raca" element={<Raca />} />
          <Route path="/dados" element={<Dice />} />
          <Route path="/email" element={<Email />} />
          <Route path="/autatication" element={<Email />} />
        </Routes>
      </div>

    </>
  )
  }

  export default Top
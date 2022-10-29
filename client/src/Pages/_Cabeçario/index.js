import Navbar from "./Navbar"
import Home from "../Home/index"
import Classes from "../Classes/index"
import Raca from "../Raças/index"
import Quiz from "../Quiz/index"
import Dados from "../Dados/RollDice"
import Email from "../EnviarEmail/Index";
import { Route, Routes } from "react-router-dom"
import Song from "./Song"

function Top() {
  return (
    <>
      <Navbar/>
      <div className="Top">
        <Song/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Classes" element={<Classes/>} />
          <Route path="/raca" element={<Raca />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/dados" element={<Dados />} />
          <Route path="/email" element={<Email />} />
        </Routes>
      </div>

    </>
  )
  }

  export default Top
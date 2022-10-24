import Navbar from "./Navbar"
import Home from "../Home/index"
import Classe from "../Classes/index"
import Raca from "../Raças/index"
import Quiz from "../Quiz/index"
import Dados from "../Dados/index"
import { Route, Routes } from "react-router-dom"

function Top() {
  return (
    <>
      <Navbar/>
      <div className="Top">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/classe" element={<Classe />} />
          <Route path="/raca" element={<Raca />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/dados" element={<Dados />} />
        </Routes>
      </div>

    </>
  )
  }

  export default Top
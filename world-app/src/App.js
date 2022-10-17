import './App.css';

import Home from './Home';
import About from './About';
import Classes from './Classes';
import Dice from './Dice';
import NavBar from './NavBar';

import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
      <center><NavBar/></center>
      <Routes>
      <Route exact path="/" element = {<Home/>}/>
      <Route exact path="/about" element = {<About/>}/>
      <Route exact path="/classes" element = {<Classes/>}/>
      <Route exact path="/dice" element = {<Dice/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

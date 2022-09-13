
import "./App.css";
import skeleton from "./dancingskeleton.gif";
import email from "./email.gif";
import { render } from "@testing-library/react";

import { useState } from "react";
import About from "./about";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Cloaca Mag</h1>
        <h2>piss///birth///////shithole</h2>
        
          
            <ul>
              <li>
                <Link to="/about"> About </Link>
              </li>
            </ul>
          
          <Routes>
          <Route path="/about/" element={<About />}>
              
          </Route>
          </Routes>
        


        
        

        <body className="body">
          <p>
            whoa welcome to our sweetttt hallozine website<br></br>
            submit your delicious whatever/s to:<h1> CloacaMag@gmail.com</h1>
          </p>

          
            <img
              className="emailimage"
              src={email}
              alt="wiggly pixely skeleton hand email link"
            ></img>
          

          <h1>
            <h1 className="animate">
              [desired]
              <br></br>
            </h1>
            <h1 className="small">
              Gore! body horror! PISSPOEM putrification seances RITUALS HEXES
              <br></br>
              LUSTBONES FLASH FICTS PROSE POEMS FAIRY TALES SKINLESS THINGS FISH
              HEADS <br></br>Fridge toes anything clawed anything rancid{" "}
              <br></br>Images: Lofi plz<br></br>
              WHEN IN DOUBT: SLEAZE IT UP
            </h1>
          </h1>

          <img
            className="skeletonimage"
            alt="a sweet ass dancing skeleton from like a 90s geocities site"
            src={skeleton}
          ></img>
        </body>
      </header>
      
    </div>
    </Router>
  );
}







export default App;

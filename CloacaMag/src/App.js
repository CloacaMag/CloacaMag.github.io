
import "./App.css";

import { BrowserRouter as Router,
Routes,
Route,
NavLink,
 } from "react-router-dom";
import { Component } from "react";

import About from "./component/about";
import Contact from "./component/contact";

import {RB, } from "./component/Authors/rb";
import Landing from "./component/Landing_Hallozine2022"
import {Megforajter} from "./component/Authors/megforajter";
import {Saramatson} from "./component/Authors/saramatson";
import {Simonbrown} from "./component/Authors/simonbrown";
import {Stephanielanesutton} from "./component/Authors/stephanielanesutton";
import {Ashelyadams} from "./component/Authors/ashelyadams";
import {Elf} from "./component/Authors/elf";
import {Quinnrfairchild} from "./component/Authors/quinnrfairchild";
import {Philipsorenson} from "./component/Authors/philipsorensen";
import {Joebielecki} from "./component/Authors/joebielecki";
import {Avahoffman} from "./component/Authors/avahoffman";
import {Laurapaul} from "./component/Authors/laurapaul"
import {Orifienberg} from "./component/Authors/orifienberg"



class App extends Component{
  render(){
  return (

    <Router>
    
    <div>


      <header className="App-header">
        
        <h1>Cloaca Mag</h1>
        <h2>piss///birth///////shithole</h2>
        
        <ul>
        
          <li a className="active">
            <NavLink to='/about'>About</NavLink>
          </li>
          <li a className="active">
            <NavLink to='/contact'>Contact Us</NavLink>
          </li>
     
          
          <li>
     
            <NavLink to='/'>Hallozine</NavLink>
          </li>
          
        </ul>
        
        <Routes>
        <Route exact path="/" element={< Landing />}></Route>
        <Route exact path="about" element={< About />}></Route>
        
        <Route exact path="contact" element={<Contact />}></Route>
        
        <Route exact path="/" element={<Landing />}>
          <Route path='rb' element={<RB />}>
          
          </Route>
          <Route path='Megforajter' element ={<Megforajter/>}>
         
          </Route>
          <Route path='Simonbrown' element ={<Simonbrown/>}>
          
          </Route>
          <Route path='Saramatson' element ={<Saramatson/>}>
          
          </Route>
          <Route path='Stephanielanesutton' element ={<Stephanielanesutton/>}>
   
          </Route>
          <Route path='Ashelyadams' element ={<Ashelyadams/>}>
          
          </Route>
          <Route path='Quinnrfairchild' element ={<Quinnrfairchild/>}>
          
          </Route>
          <Route path='Elf' element ={<Elf/>}>
          
          </Route>
          <Route path='Philipsorensen' element ={<Philipsorenson/>}>
         
          </Route>
          <Route path='Joebielecki' element ={<Joebielecki />}>
          
          </Route>
          <Route path='Avahoffman' element ={<Avahoffman />}>
          
          </Route>
          <Route path='Laurapaul' element ={<Laurapaul/>}>
          
          </Route>
          <Route path='Orifienberg' element ={<Orifienberg/>}>
          
          </Route>
        </Route>
        </Routes>
        
      
     </header>
    </div>
    </Router>

  );
  
        
        
  
}
}

export default App;

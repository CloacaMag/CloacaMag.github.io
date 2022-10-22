import React from "react";

import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom"

import { NavLink,} from "react-router-dom";

    function Landing() {
       
        let navigate = useNavigate()
        
    return <div>
  

     <div className="hallozineoutlet">
     <Outlet />
     </div>
     <image className="hallozineimage">
      <img src="https://web.archive.org/web/20090808185522/http://www.geocities.com/halloween2001tesla/ANIcastleL_.gif" />
      </image>
    <div className="hallozinelanding" >
    
            
            <ul className="hallozinelanding">
          <li>
            <NavLink replace to={"rb"}>R Daniel Brown</NavLink>
          </li>
          <li><NavLink to={"Megforajter"}>Meg Forajter</NavLink></li>
          <li><NavLink to={"Philipsorensen"}>Philip Sorensen</NavLink></li>
          <li><NavLink to={"Elf"}>Elana Lev Friedland</NavLink></li>
          <li><NavLink to={"Saramatson"}>Sara Matson</NavLink></li>
          <li><NavLink to={"Stephanielanesutton"}>Stephanie Lane Sutton</NavLink></li>
          <li><NavLink to={"Ashelyadams"}>Ashely Adams</NavLink></li>
          <li><NavLink to={"Quinnrfairchild"}>Quinn R. Fairchild</NavLink></li>
          <li><NavLink to={"Simonbrown"}>Simon Brown</NavLink></li>
          <li><NavLink to={"Joebielecki"}>Joe Bielecki</NavLink></li>
          <li><NavLink to={"Avahoffman"}>Ava Hoffman</NavLink></li>
          <li><NavLink to={"Laurapaul"}>Laura Paul</NavLink></li>
          <li><NavLink to={"Orifienberg"}>Ori Fienberg</NavLink></li>
         
          
          
          
          
        </ul>
        
        
        
        
        </div>
        
        
        </div>
        
        
        
}
    

export default Landing
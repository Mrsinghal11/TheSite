import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar=()=>{

   return(
       <>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <a class="navbar-brand" href="/">Affy Informatics</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <NavLink  activeStyle={{color:"red"}}
                style={{marginRight:100,marginLeft:100}} 
                exact strict
                to="/">Home</NavLink>

      <NavLink  activeStyle={{color:"red"}}
                style={{marginRight:100}}
                exact strict
                to="/about">About</NavLink>

      <NavLink  activeStyle={{color:"red"}}
                style={{marginRight:100}} 
                exact strict
                to="/contact">Contact</NavLink>
    </div>
  </div>
</nav>
</>
   );
}

export default Navbar;

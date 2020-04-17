import React from 'react'
import {Link} from 'react-router-dom'
import Background from '../img/cropbg.png';
import Logo from '../img/Logo.png'

  function Landing() {
    return(
      <Link to="/categories">
      <div className="landing" onClick={()=>{console.log("Clicked")}} style={{height:"100vh", width:"100vw", backgroundImage: "url(" + Background + ")", backgroundSize:"cover"}}>
         
      </div>
      </Link>
    )
  }
export default Landing
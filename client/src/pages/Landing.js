import React from 'react'
import {Link} from 'react-router-dom'

  function Landing() {
    return(
      <Link to="/categories">
      <div className="" onClick={()=>{console.log("Clicked")}} style={{height:"100vh", width:"100vw" }}>
        
      </div>
      </Link>
    )
  }
export default Landing
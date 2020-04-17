import React from 'react'
import {Link} from 'react-router-dom'
  function BackButton(props) {
    let text = "< Back"
    return(
      <Link to={props.path} >
        <div>
          {text}
        </div>
      </Link>
    )
  }
export default BackButton
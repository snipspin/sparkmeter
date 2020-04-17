import React from 'react'
import {Link} from 'react-router-dom'
import ButtonImg from '../img/Done Button.png';

  function NewSearchButton() {
    return(
      <Link to="/categories">
      <div className="endbtn">
        <img src={ButtonImg} className="endbtn"/>
      </div>
      </Link>
    )
  }
export default NewSearchButton
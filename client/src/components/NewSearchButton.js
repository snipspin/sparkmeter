import React from 'react'
import {Link} from 'react-router-dom'
import ButtonImg from '../img/Done Button.png';

  function NewSearchButton() {
    return(
      <Link to="/categories">
      <div>
        <img src={ButtonImg} />
      </div>
      </Link>
    )
  }
export default NewSearchButton
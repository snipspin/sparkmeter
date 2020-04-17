import React from 'react'
import NewSearchButton from '../components/NewSearchButton'
import Meter from '../img/Meter Background.png'
import Arrow from '../img/Meter Arrow.png'

  function Results(props) {
    //console.log(props.selectedItem)
    //console.log(props.selectedItem.name)
    let name = "Dryer3"
    let rotation = {
      transform:"rotate(45deg)",
      transformOrigin: "bottom"
    }
    return(
      <div className="results">
        <div className="sparkresult">
          <h1 className="bckgrndcolor">Spark Meter</h1>
          <div className="meter">
            <img src={Meter} className="metback"/>
            <img src={Arrow} className="arrow" style={rotation} />
          </div>
        </div>  
        <div className="results2">
          <h2 className="bckgrndcolor">YES! Get that</h2>
          <p className="bckgrndcolor">{props.selectedItem.name}</p>
          <img className="bckgrndcolor" src={props.selectedItem.image}/>
          {/* {props.selectedItem.name} */}
          <NewSearchButton />
        </div>
      </div>
    )
  }
export default Results
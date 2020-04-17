import React, {useState, useEffect} from 'react'
import NewSearchButton from '../components/NewSearchButton'
import Meter from '../img/Meter Background.png'
import Arrow from '../img/Meter Arrow.png'

  function Results(props) {
    const [arrowRotation, setArrowRotation] = useState(0)

    useEffect(()=> {
      setArrowRotation((result)? 45 : -45)
    }, [])
    //console.log(props.selectedItem)
    //console.log(props.selectedItem.name)
    let name = "Dryer3"
    let rotation = {
      transform:`rotate(${arrowRotation}deg)`,
      transformOrigin: "bottom"
    }
    let result = (props.selectedItem.fit == 1)? false : true
    
    let getThatItemText = (result)? ("YES! Get that item!"): ("NO! Don't get that item!")
    
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
          <h2 className="wordresult">{getThatItemText}</h2>
          <p className="selecteditemname">{props.selectedItem.name}</p>
          <img className="endpic" src={props.selectedItem.image}/>
          {/* {props.selectedItem.name} */}
          <NewSearchButton />
        </div>
      </div>
    )
  }
export default Results
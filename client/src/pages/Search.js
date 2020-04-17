import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import BackButton from '../components/BackButton'

const shoppingItems = [
  {name: "Dryer",   brand: "No Name1",  image: "http://placekitten.com/200/200",  price: "800"},
  {name: "Dryer2",  brand: "No Name2",  image: "http://placekitten.com/200/200",  price: "900"},
  {name: "Dryer3",  brand: "No Name3",  image: "http://placekitten.com/200/200",  price: "850"}
]

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("")
  const [primaryResult, setPrimaryResult] = useState()
  const [secondaryResults, setSecondaryResults] = useState()
  const [goToResults, setGoToResults] = useState()

  const selectItemHandler = (e, data) => {
    e.preventDefault()
    props.setSelectedItem(data)
  }

  useEffect(() => {
    if (searchTerm.length >= 0) {
      // start searching
      setPrimaryResult(
        <div>
          <h3>Are you thinking about this?</h3>
        
          <div className="pribox">
            <img src={shoppingItems[0].image} className="firstpic"/>
            {shoppingItems[0].brand}
            {shoppingItems[0].name}
            Price: {shoppingItems[0].price}
            image and name/brand/price of item
          </div>
        </div>
      )
      setSecondaryResults(
        <div>
          <h3>Or maybe one of those</h3>
          <div className="choices" onClick={(e)=>{selectItemHandler(e,shoppingItems[1])}}>
            <img src={shoppingItems[1].image} className="choicepic"/>
            <div className="desc">
              {shoppingItems[1].brand}
              {shoppingItems[1].name}
              Price: {shoppingItems[1].price}
            </div>
          </div>
          <div className="choices" onClick={(e)=>{selectItemHandler(e,shoppingItems[2])}}>
            <img src={shoppingItems[2].image} className="choicepic"/>
            <div className="desc">
              {shoppingItems[2].brand}
              {shoppingItems[2].name}
              Price: {shoppingItems[2].price}
            </div>
          </div> 
          <div className="choices" onClick={(e)=>{selectItemHandler(e,shoppingItems[2])}}>
            <img src={shoppingItems[2].image} className="choicepic"/>
            <div className="desc">
              {shoppingItems[2].brand}
              {shoppingItems[2].name}
              Price: {shoppingItems[2].price}
            </div>
          </div> 
        </div>       
      )

      setGoToResults(renderButton())
      }


  }, [searchTerm])

  const renderButton = () => {
    return (
      <Link to ='/results'>
        <input type="button" name="submit" className="submitbtn" value="Yes" />
      </Link>
    )
  }

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value)
  }

    return(
        <div className="search">
          <div className="back">
            <BackButton path="/survey"/>  
          </div>
          <div className="seachbar">
            <input type="text" placeholder="Search" onChange={(e)=>{onChangeHandler(e)}} />
          </div>
          <div className="priresults">
            {primaryResult}
          </div>
          <div className="secresults">
            {secondaryResults}
            {goToResults}
          </div>
        </div>
    )
}

export default Search;


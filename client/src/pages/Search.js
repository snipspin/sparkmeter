import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

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
    if (searchTerm.length > 2) {
      // start searching
      setPrimaryResult(
        <div>
          <h3>Are you thinking about this?</h3>
          {shoppingItems[0].brand}
          {shoppingItems[0].name}
          <img src={shoppingItems[0].image} />
          Price: {shoppingItems[0].price}
          image and name/brand/price of item
        </div>
      )
      setSecondaryResults(
        <div>
          <h3>Or maybe one of those</h3>
        <div onClick={(e)=>{selectItemHandler(e,shoppingItems[1])}}>
          {shoppingItems[1].brand}
          {shoppingItems[1].name}
          <img src={shoppingItems[1].image} />
          Price: {shoppingItems[1].price}
        </div>
        <div onClick={(e)=>{selectItemHandler(e,shoppingItems[2])}}>
          {shoppingItems[2].brand}
          {shoppingItems[2].name}
          <img src={shoppingItems[2].image} />
          Price: {shoppingItems[2].price}
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
            <form>
            <input type="text" placeholder="Search" onChange={(e)=>{onChangeHandler(e)}} />
            <input type="submit" value="submit" />
            </form>
            {primaryResult}
            {secondaryResults}
            {goToResults}
        </div>
    )
}

export default Search;


import React from 'react'
import { Link, useHistory } from 'react-router-dom';

function Categories(props) {
  let history = useHistory()
    const clickHandler = (e, category) => {
      e.preventDefault()
      props.setActiveCategory(category)
      history.push("/survey")
    } 
    let categoryList = props.categories.map((category, i) => {
        return (
            <div className={category} key={i} onClick={(e)=>clickHandler(e,category)}>
              
            </div>
        )
    })

    return (

        <div className="categories">
            <h3>Choose a Category</h3>
            <div className="catContainer">
                {categoryList}
            </div>
        </div>
    )
}

export default Categories;
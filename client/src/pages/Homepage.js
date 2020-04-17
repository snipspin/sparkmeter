import React from 'react'
import Categories from '../components/Categories'


function Homepage(props) {
    return(
      <div>
        <Categories categories={props.categories} setActiveCategory={props.setActiveCategory} />
      </div>
    )
  }
export default Homepage
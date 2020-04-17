import React from 'react'
import { Link } from 'react-router-dom';

function Categories(props) {
    
    let categoryList = props.categories.map((category, i) => {
        return (
            <div className="eachCatBox" key={i}>
                <Link to ='/survey' onClick={()=>props.setActiveCategory(category)}>
                    <h3 className="catName">{category}</h3>
                    <img src="" className="catPic" alt={i}/>
                </Link>
            </div>
        )
    })

    return (
        <div className="categories">
            {categoryList}
        </div>
    )
}

export default Categories;
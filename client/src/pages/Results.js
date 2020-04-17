import React from 'react'
import NewSearchButton from '../components/NewSearchButton'

  function Results(props) {
    console.log(props.selectedItem)
    return(
      <div>
        Results
        {props.selectedItem.name}
        <NewSearchButton />
      </div>
    )
  }
export default Results
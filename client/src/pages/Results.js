import React from 'react'

  function Results(props) {
    console.log(props.selectedItem)
    return(
      <div>
        Results
        {props.selectedItem.name}
      </div>
    )
  }
export default Results
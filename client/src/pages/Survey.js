import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'

function Survey(props) {
    const [surveyData, setSurveyData] = useState()
    useEffect(()=> {
        setSurveyData(props.surveyData)
        console.log("this is fired")
    }, [props.surveyData])

    const handleChange = (event, index) => {
        // event.preventDefault()
        console.log(event.target)
        // console.log(event.target.checked)
        // event.target.checked=event.target.checked
        // props.activeCategory
        // props.surveyData
        console.log(props.surveyData)
        // props.surveyData[index]["rating"] = (props.surveyData[index]["rating"] === 0)? 1: 0
        // props.surveyData[index]["rating"] = !props.surveyData[index]["rating"]
        // console.log(`${index} ${props.surveyData[index]["question"]} ${props.surveyData[index]["rating"]}`)
        // props.updateSurveyData(props.activeCategory, props.surveyData)
        console.log((props.surveyData[props.activeCategory][index]["rating"] === 0) ? 1 : 0)
        console.log(props.activeCategory)
        props.updateSurveyData(props.activeCategory, index, (props.surveyData[props.activeCategory][index]["rating"] === 0) ? 1 : 0)
        // event.target.checked=true
        event.target.checked=(props.surveyData[props.activeCategory][index]["rating"] === 0) ? false : true
    }
    let criteriaList = () => {
        console.log("This is running")
        if (typeof(props.surveyData) !== "undefined") {
            
            return props.surveyData[props.activeCategory].map((criteria, i) => {
                // let checked = (criteria["rating"] === 0) ? false : true
                return (
                    <div className="criteria" key={i}>
                        <label><h4>{criteria.question}</h4></label>
                        <input type="checkbox" onChange={(e)=>handleChange(e,i)} checked={(criteria["rating"] === 0) ? false : true} />
                    </div>
                )
            })
        }
        else {
            return (
                <div>
                <h1>Service unavailable</h1>
                </div>
            )
        }
    }
    return(
        <div className="survey">
            This is the category {props.activeCategory}
            <form>
                <h2>Pick the 5 most important criterias for a purchase</h2>
                    <div className="eachCrit">{criteriaList()}</div>
                
                <Link to ='/search'>
                <input type="button" name="submit" className="submitbtn" value="Submit" />
                </Link>
            </form>
        </div>
    )
}

export default Survey;
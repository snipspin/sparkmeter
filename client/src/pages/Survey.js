import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import BackButton from '../components/BackButton'
import SubmitButton from '../img/Submit button.png'

function Survey(props) {
    const [surveyData, setSurveyData] = useState()
    useEffect(()=> {
        setSurveyData(props.surveyData)
    }, [props.surveyData])

    const handleChange = (event, index) => {
        event.preventDefault()
        props.updateSurveyData(props.activeCategory, index, (props.surveyData[props.activeCategory][index]["rating"] === 0) ? 1 : 0)
        event.target.className=(props.surveyData[props.activeCategory][index]["rating"] === 0) ? "notChosen" : "chosen"
    }
    let criteriaList = () => {
        if (typeof(props.surveyData) !== "undefined") {
            return props.surveyData[props.activeCategory].map((criteria, i) => {
                return (
                    <div className="criteria" key={i}>
                        <button className={(criteria["rating"] === 0) ? "notChosen" : "chosen"} onClick={(e)=>handleChange(e,i)}>{criteria.question} </button>
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
            <div className="back">
                <BackButton path="/categories"/>
            </div>
            <div className="surveyhead">
                <img src={props.categoryImages[props.activeCategory]} />
                <span className="actcat">{props.activeCategory}</span>
            </div>
            <div className="survform">
                    <span className="survques">What three things are most important to you?</span>
                <form>
                        <div className="eachCrit">{criteriaList()}</div>
                    
                    <Link to ='/search'>
                    <button type="submit" name="submit" className="submitbtn" value="Submit"><img src={SubmitButton}/></button>
                
                    </Link>
                </form>
            </div>    
        </div>
    )
}

export default Survey;
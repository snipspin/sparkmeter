import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom'
// import Categories from './components/Categories'
import Content from "./pages/Content"
// import Homepage from "./pages/Homepage"
import './App.css';

 // check if survey is filled
 //localStorage.getItem("survey")
 // render survey if not

//  localStorage.setItem("survey", JSON.stringify(surveyJson) )

// let surveyJson = {
//   entries: [
//     {question: "How do you value price over durability?", rating: 0},
//     {question: "What is your income level?", rating: 0}
//   ]
// }

 // render search bar if it is

function App() {
  // local storage item
  const [surveyData, setSurveyData] = useState()
  const [selectedItem, setSelectedItem] = useState()
    // [
    // {question: "High durability?", rating: 0},
    // {question: "Low price", rating: 0},
    // {question: "Popular Brand", rating: 0},
    // {question: "Lots of Reviews", rating: 0},
    // {question: "Good fit", rating: 0},
    // {question: "Easy Returns", rating: 0},
    // {question: "Customer Service", rating: 0},
    // {question: "As described", rating: 0},
    // {question: "Trendy", rating: 0},
    // {question: "Machine wash", rating: 0}
// ]
// )
  const categories = ["Clothing", "Electronics", "Automotive", "Kitchen", "Furniture", "Health & Beauty"]
  const [activeCategory, setActiveCategory] = useState('Clothing')
  useEffect(() => {		
    // localStorage.clear()
    if (typeof(Storage) !== "undefined") {
      // localStorage.clear()
      // we have access to local storage
      let localSurvey = JSON.parse(localStorage.getItem("survey"))
      // console.log(localSurvey)
      if (localSurvey != null && Object.keys(localSurvey).length > 0) {
        // there is a survey stored, is it also filled?
        setSurveyData(localSurvey)
        // console.log(localSurvey)
        // console.log(`fix this`)
        // console.log(surveyData)
      } else {
        // console.log(`resetting survey`)
        // we need to create an empty survey object
        let newSurveyData = CreateEmptySurveyInStorage(categories)
        localStorage.setItem("survey", JSON.stringify(newSurveyData))
        setSurveyData(newSurveyData)
      }
    } else {
      // we need to gather the survey information every time
      // the site is revisited
      setSurveyData(CreateEmptySurveyInStorage(categories))
    }
  },[])

//if (surveyData) return <Redirect to='./search' />

  const CreateEmptySurveyInStorage =(categories) => {
    let surveyCategoriesAndCriteria = {}
    categories.forEach(category => {
      surveyCategoriesAndCriteria[category] = [
        {question: "High durability?", rating: 0},
        {question: "Low price", rating: 0},
        {question: "Popular Brand", rating: 0},
        {question: "Lots of Reviews", rating: 0},
        {question: "Good fit", rating: 0},
        {question: "Easy Returns", rating: 0},
        {question: "Customer Service", rating: 0},
        {question: "As described", rating: 0},
        {question: "Trendy", rating: 0},
        {question: "Machine wash", rating: 0}
      ]
    })
  return surveyCategoriesAndCriteria
}

const updateSurveyData = (category, index, rating) => {
  let tempSurveyData = surveyData;
  tempSurveyData[category][index]["rating"] = rating
  setSurveyData(tempSurveyData)
  localStorage.setItem("survey", JSON.stringify(surveyData))
  // console.log(surveyData[category][index]["rating"])
}


  return (
    <BrowserRouter>
      <div className="App">
        <Content selectedItem={selectedItem} setSelectedItem={setSelectedItem} updateSurveyData={updateSurveyData} categories={categories} survey={surveyData} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
 
      </div>
    </BrowserRouter>
  );
}



export default App;
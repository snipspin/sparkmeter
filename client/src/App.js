import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom'
import Content from "./pages/Content"
import './App.css';

import ClothingNB from './img/ClothingNB.png'
import ElectronicsNB from './img/ElectronicsNB.png'
import ToysNB from './img/ToysNB.png'
import KitchenNB from './img/KitchenNB.png'
import GardeningNB from './img/GardeningNB.png'
import BeautyNB from './img/BeautyNB.png'
import FurnitureNB from './img/FurnitureNB.png'
import SportsNB from './img/SportsNB.png'

function App() {
  // local storage item
  const [surveyData, setSurveyData] = useState()
  const [selectedItem, setSelectedItem] = useState(
    {name: "Dryer3",  brand: "No Name3",  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ689SI11eXmaBd_RY4ANNrgLrxT5V5XqmyzqCdRGXnnc4aII9F&usqp=CAU",  price: "850"}
  )

  const categories = ["Clothing", "Electronics", "Toys", "Kitchen", "Gardening", "Beauty", "Furniture", "Sports"]
  const categoryImages = {
    Clothing: ClothingNB,
    Electronics: ElectronicsNB,
    Toys: ToysNB,
    Kitchen: KitchenNB,
    Gardening: GardeningNB,
    Beauty: BeautyNB,
    Furniture: FurnitureNB,
    Sports: SportsNB,

  }
  const [activeCategory, setActiveCategory] = useState('Clothing')
  useEffect(() => {		
    // localStorage.clear()
    if (typeof(Storage) !== "undefined") {
      // we have access to local storage
      let localSurvey = JSON.parse(localStorage.getItem("survey"))
      if (localSurvey != null && Object.keys(localSurvey).length > 0) {
        // there is a survey stored, is it also filled?
        setSurveyData(localSurvey)
      } else {
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
}

  return (
    <BrowserRouter>
      <div className="App">
        <Content categoryImages={categoryImages} selectedItem={selectedItem} setSelectedItem={setSelectedItem} updateSurveyData={updateSurveyData} categories={categories} survey={surveyData} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      
      </div>
    </BrowserRouter>
  );
}

export default App;

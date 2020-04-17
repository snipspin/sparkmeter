import React from 'react';
import { Route } from 'react-router-dom';
import Survey from './Survey'
import Homepage from './Homepage';
import Search from './Search';
import Results from './Results';
import Landing from './Landing'

function Content(props) {
    return(
        <div className="content">
            <Route exact path="/" render={() => <Landing />} />
            <Route path="/categories" render={() => <Homepage  categories={props.categories}  setActiveCategory={props.setActiveCategory} />} />
            <Route path="/search" render={ () => <Search setSelectedItem={props.setSelectedItem} /> }/>
            <Route path="/results" render={ () => <Results selectedItem={props.selectedItem} /> } />
            <Route path="/survey" render={ () => <Survey categoryImages={props.categoryImages} activeCategory={props.activeCategory} surveyData={props.survey} updateSurveyData={props.updateSurveyData} />} />
  
         </div>
    )
}

export default Content;

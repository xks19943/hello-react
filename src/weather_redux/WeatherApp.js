import React, {Component} from 'react';
import './index.css';
import {view as CitySelector} from './city_selector';
import {view as Weather} from './weather';

class WeatherApp extends Component{
  render(){
    return(
      <div>
        <CitySelector/>
        <Weather/>
      </div>
    )
  }
}

export default WeatherApp;
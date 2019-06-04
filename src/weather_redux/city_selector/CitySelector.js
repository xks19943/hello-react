import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as WeatherActions from '../weather/actions';

const CITY_CODES = {
  '北京': 101010100,
  '上海': 101020100,
  '广州': 101280101,
  '深圳': 101280601
};


class CitySelector extends Component{
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }


  onChange(event){
    const cityCode = event.target.value;
    this.props.onSelectCity(cityCode);
  }

  componentDidMount() {
    const defaultCity = Object.keys(CITY_CODES)[0];
    this.props.onSelectCity(CITY_CODES[defaultCity]);
  }



  render(){
    return(
      <select onChange={this.onChange}>
        {
          Object.keys(CITY_CODES).map(cityName => <option
            key={cityName} value={CITY_CODES[cityName]}>{cityName}</option>
          )
        }
      </select>
    )
  }
}

CitySelector.propTypes = {
  onSelectCity: PropTypes.func.isRequired
};

const mapDispatchProps = (dispatch)=>{
  return {
    onSelectCity: (cityCode) => {
      dispatch(WeatherActions.fetchWeather(cityCode))
    }
  }
};

export default connect(null,mapDispatchProps)(CitySelector);
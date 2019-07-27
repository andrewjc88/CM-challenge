import React, { Component } from 'react';
import SelectionBar from './SelectionBar/SelectionBar';
import * as navData from './navigation.json';
import './TopNav.css';

class TopNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCityIdx: 0,
    }
  }

  setselectedCity = (idx) => {
    this.setState({ selectedCityIdx: idx });
  }

  render() {
    const { selectedCityIdx } = this.state;
    const { cities } = navData;

    return (
      <div>
        <ul className="top-nav" >
          {cities.map((city, idx) => {
            return (
              <li
                key={city.section}
                id={`nav-itm-${city.section}`}
                className={`nav-item ${idx === selectedCityIdx && "nav-item-active"}`}
                onClick={() => this.setselectedCity(idx)}
              >
                {city.label}
              </li>
            )
          })}
        </ul>
        <SelectionBar selectedCity={cities[selectedCityIdx].section} />
      </div>
    )
  }
}

export default TopNav;

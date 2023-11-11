import React from 'react';
import PropTypes from 'prop-types';
import Weather from './Weather';

const CountryInfo = ({filteredCountry}) => {
    const languages = Object.values(filteredCountry.languages)
    return (
        <div>
          <h1>{filteredCountry.name.common}</h1>
          <div>capital {filteredCountry.capital}</div>
          <div>area {filteredCountry.area}</div>
          <h3>Languages:</h3>
          <ul>
            {languages.map(x => <li key={x}>{x}</li>)}
          </ul>
          <img src={filteredCountry.flags.png}></img>
          <Weather country={filteredCountry}></Weather>
        </div>
    );
};

export default CountryInfo;
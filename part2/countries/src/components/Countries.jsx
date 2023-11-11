import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import CountryInfo from './CountryInfo'

const Countries = ({allCountries, showClicked, filteredList}) => {

  if(allCountries != "") {
    if(filteredList.length > 10) {
      return (<div>Too many matches. Specify another filter</div>)
    } else if (filteredList.length == 1){
      const filteredCountry = filteredList[0]
      return (<CountryInfo filteredCountry={filteredCountry}/>)
      // return showClicked(filteredCountry.name.common)
    } else {
      return (filteredList.map(x => <div>{x.name.common} <button onClick={() => showClicked(x.name.common)}>show</button></div>))
    }

  }
}

export default Countries
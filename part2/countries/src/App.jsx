import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import Countries from "./components/Countries"
import CountryInfo from './components/CountryInfo'

function App() {
  const [newFilter, setNewFilter] = useState('')
  const [allCountries, setAllCountries] = useState('')
  const [filterdList, setFilteredList] = useState([])


  // get all the countries from the server
  useEffect(() => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => {
      setAllCountries(response.data)
    })
  }, [])

  const handleFilter = (event) => {
    setNewFilter(event.target.value)
    const filteredList = allCountries.filter(x => x.name.common.toLowerCase()
        .includes(newFilter.toLowerCase()))
    setFilteredList(filteredList)
  }

  const showClicked = (name) => {
    const countryOfInterest = allCountries.filter(x => x.name.common == name)[0]
    setFilteredList([countryOfInterest])
    return (<CountryInfo filteredCountry={countryOfInterest}/>)
  }


  return (
    <>
      <div>find countries <input onChange={handleFilter}></input></div>
      <Countries allCountries={allCountries} showClicked={showClicked} filteredList={filterdList}></Countries>
    </>
  )
}

export default App

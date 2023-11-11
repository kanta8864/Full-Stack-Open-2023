import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from "axios"

const Weather = ({country}) => {

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const apikey = import.meta.env.VITE_SOME_KEY
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${apikey}`)
        .then(response => {
            setWeather(response.data)
            console.log(weather)
        })
    }, [])

    if (weather == null) return null

    return (
        <div>
            <h2>Weather in {country.name.common}</h2>
            <div>{`temperature ${(weather.main.temp - 273.15).toFixed(2)} celcius`}</div>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
            <div>{`wind ${weather.wind.speed} m/s`}</div>
        </div>
    );
};


export default Weather;
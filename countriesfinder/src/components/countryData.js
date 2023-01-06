import axios from 'axios';
import {React, useEffect} from 'react';


const Information = ({theCountry}) =>
{
    const lat = theCountry.capitalInfo.latlng[0];
    const long = theCountry.capitalInfo.latlng[1];
    const apiKey = process.env.REACT_APP_API_KEY

    console.log(apiKey);
    const newArr = [];
    for(const key in theCountry["languages"])
    {
        newArr.push(theCountry["languages"][key])
    }

    useEffect(() =>
    {
        axios.get(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`)
    })

    return(
        <div>
            <h1>{theCountry.name.common}</h1>
            <p>Capital: {theCountry.capital}<br></br>Area: {theCountry.area}</p>
            <br></br>
            <strong>Languages:</strong>
            <ul>
                {newArr.map((language) =>
                {
                    return <li key={Math.random()*999}>{language}</li>
                })}
            </ul>
            <img src={theCountry["flags"]["png"]}></img>
        </div>
    )
}



export default Information;




















import {React} from 'react';


const Information = ({theCountry}) =>
{
    const newArr = [];
    for(const key in theCountry["languages"])
    {
        newArr.push(theCountry["languages"][key])
    }

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




















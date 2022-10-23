import React from 'react';
import Information from './countryData';


const ListView = ({theData, searched}) =>
{
    let dataVar = theData;
    let filteredCountries = [];

    filteredCountries = dataVar.filter((country) =>
    {
        return country.name.common.toLowerCase().includes(searched.toLowerCase())
    })

    //console.log(dataVar[0].name.common);
    return(
        <div>
            <ul>
                {filteredCountries.map((country) =>
                {
                    return <li>{country.name.common}</li>
                })}
            </ul>
        </div>
    );

}


export default ListView;




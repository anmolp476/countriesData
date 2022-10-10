import React from 'react';


const ListView = (props) =>
{
    let dataVar = props.theData;
    const currSearch = props.searched;

    //console.log(dataVar[0].name.common);
    return(
        <div>
            <ul>
                <li>{dataVar[0].name.common}</li>
                {dataVar.map((country) =>
                {
                    return <li>{country.name.common}</li>
                })}
            </ul>
        </div>
    );

}


export default ListView;




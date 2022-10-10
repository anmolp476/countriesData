import React from 'react';
import {useState} from 'react';


const SearchBar = ({text}) =>
{
  const [search, setSearch] = useState('');

  console.log(search);

  const inputChange = (event) =>
  {
    //console.log(event.target.value);
    setSearch(event.target.value);
  }

  return(
    <div>
      {text}<input value={search} onChange={inputChange}></input>
    </div>
  );

}


function App() {
  return (
    <div className="App">
        <SearchBar text="find countries"/>
    </div>
  );
}

export default App;

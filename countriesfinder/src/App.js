import React from 'react';
import {useState} from 'react';


const View = () =>
{
  const [search, setSearch] = useState('');

  const inputChange = (event) =>
  {
    //console.log(event.target.value);
    setSearch(event.target.value);
  }

  return(
    <div>
      <SearchBar text="find countries" values={search} change={inputChange}/>
    </div>
  );

}


const SearchBar = (props) =>
{
  return(
    <div>
      {props.text}<input value={props.values} onChange={props.change}></input>
    </div>
  );
}


function App() {
  return (
    <div className="App">
        <View/>
    </div>
  );
}

export default App;

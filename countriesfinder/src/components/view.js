import React from 'react';
import {useState} from 'react';
import SearchBar  from './searchBar';

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


export default View;


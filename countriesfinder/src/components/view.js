import React from 'react';
import {useState} from 'react';
import SearchBar  from './searchBar';
import List from './list';

const View = ({countriesData}) =>
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
      <List theData={countriesData} searched={search}/>
    </div>
  );

}


export default View;


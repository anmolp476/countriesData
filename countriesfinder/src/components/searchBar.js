import React from 'react';


const SearchBar = (props) =>
{
  return(
    <div>
      {props.text}<input value={props.values} onChange={props.change}></input>
    </div>
  );
}

export default SearchBar;

import axios from 'axios';
import {React, useEffect, useState} from 'react';
import View from './components/view';


function App() {

  const [data, setData] = useState();

  useEffect(() =>
  {
    axios.get("https://restcountries.com/v3.1/all")
         .then(response => setData(response.data));
  })

  return (
    <div className="App">
        <View countriesData={data}/>
    </div>
  );
}

export default App;

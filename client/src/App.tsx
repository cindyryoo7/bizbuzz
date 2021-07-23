import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [businesses, setBusinesses] = useState<any []>([]);

  useEffect(() => {
    getBusinesses('29.7534056825545','-95.37598660914549');
  }, [])

  const getBusinesses = (latitude: string, longitude: string): void => {
    axios
      .get(`/search/${latitude}/${longitude}`)
      .then(result => result.data)
      .then(result => { setBusinesses(result) })
      .catch(err => { console.log(err) })
  }
  if (businesses.length) {
    return (
      <div className="App">
        {businesses.map(business => (
          <p>{business.name}</p>
        ))}
      </div>
    );
  } else {
    return null;
  }

}

export default App;

import './App.css';
import CardComponent from './CardComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState, useEffect } from "react";


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const quotes = []; 

  const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(data => {
        if (data.quotes) {
          setData(data.quotes)
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);

      });
  }, []);
  
  if (loading) {
    return <div id="App" className="App">Loading...</div>;
  }

  return (
    <div id="App" className='App'>
    {!loading ?  <CardComponent quotes={data}/> : <div>{error.message}</div> }
    </div>

  )
}

export default App;

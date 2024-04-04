import { render } from "@testing-library/react"
import React from "react";
import { Button } from 'react-bootstrap';
import twitter from './twitter-x.svg'
import { useState, useEffect } from "react";
import { TwitterShareButton } from "react-share";


function CardComponent({ quotes }) {

  const [quote, setQuote] = useState('');
  const [autor, setAutor] = useState('');



  const getRandomQuote = () => {
    let index = Math.ceil(Math.random() * (quotes.length));
    setQuote(quotes[index].quote);
    setAutor(quotes[index].author);
    getRandomColor();
  }

  const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    document.body.style.background = `rgb( ${red}, ${green}, ${blue} )`;

    document.getElementById('new-quote').style.background = `rgb( ${red}, ${green}, ${blue} )`;
  }

  useEffect(() => {
    let index = Math.ceil(Math.random() * (quotes.length));
    setQuote(quotes[index].quote);
    setAutor(quotes[index].author);
    getRandomColor();
  }, []);


  return (

  
      <div id="quote-box" className="quote-box">
        <div id="text" className="quote-text">
          <span>{quote}</span>
          </div>
        <div id="author" className="quote-author">{autor}</div>
        <div className="buttons">
          <span id="link-container" className="link-container">
          <TwitterShareButton url="https://random-quote-machine-fawn.vercel.app/" title="Check out this quote!"><img src={twitter} className="App-logo" alt="logo" /></TwitterShareButton>
          </span>
          <span id="button-container" className="button-container">
            <button id="new-quote" type="button" className="btn btn-primary btn-sm button" onClick={getRandomQuote}>New Quote</button>
          </span>

        </div>
      </div>

  )
}

export default CardComponent;



import { render } from "@testing-library/react"
import React from "react";
import { Button } from 'react-bootstrap';
import twitter from './twitter-x.svg';
import star from './star.svg';
import starFill from './star-fill.svg'
import { useState, useEffect } from "react";
import { TwitterShareButton } from "react-share";




function CardComponent({ quotes }) {

  const [quote, setQuote] = useState('');
  const [autor, setAutor] = useState('');
  const [active, setActive] = useState(false);

  const getRandomQuote = () => {
    let index = Math.ceil(Math.random() * (quotes.length));
    setQuote(quotes[index].quote);
    setAutor(quotes[index].author);
    setActive(false);
    getRandomColor();
    textTransition();
  }

  const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    document.body.style.background = `rgb( ${red}, ${green}, ${blue} )`;

    document.getElementById('new-quote').style.background = `rgb( ${red}, ${green}, ${blue} )`;
    document.getElementById('shareButton').style.background = `rgb( ${red}, ${green}, ${blue} )`;
    document.getElementById('starButton').style.background = `rgb( ${red}, ${green}, ${blue} )`; 
  }

  const toggleStar = () => {
    setActive(!active);
  }

  const textTransition = () => {
    document.getElementById('text').animate([{opacity:0},{opacity:1}],2000);
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
          <TwitterShareButton id="shareButton" url="https://random-quote-machine-fawn.vercel.app/" className="btn btn-outline-secondary"
           title="Check out this quote!">
            <img src={twitter} className="twitterIcon"  alt="logo" /></TwitterShareButton>
        </span>
        <span className="starButton">
            <button type="button" id="starButton" className="btn btn-outline-secondary" onClick={toggleStar}>
              <img src={active ? starFill : star}></img>
            </button>
          </span>
        <span id="button-container" className="button-container">  
          <button id="new-quote" type="button" className="btn btn-primary btn-sm button" onClick={getRandomQuote}>New Quote</button>
        </span>
      </div>
    </div>

  )
}

export default CardComponent;



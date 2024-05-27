import React, { useEffect, useState } from "react";
import "./RandomQuote.css";
import twiter from "../assets/x.png";
import cycle from "../assets/cycle.png";
import { quotes } from "./quotes";

export default function RandomQuote() {

    function random(){
        let randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote( quotes[randomIndex]);
    }

    function twitterpost(){
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`);
    }
  const [quote, setQuote] = useState({
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  });

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div className="bottom">
        <div className="author">{quote.author.split(',')[0]}</div>
        <div className="icons">
          <img src={cycle} onClick ={()=>random()}alt="" />
          <img src={twiter} onClick={()=> twitterpost()} alt="" />
        </div>
      </div>
      <h6>Developed with Love By Basat Maqsood</h6>
    </div>
  );
}

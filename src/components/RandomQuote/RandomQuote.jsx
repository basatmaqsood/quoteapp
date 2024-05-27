import React from "react";
import "./RandomQuote.css";
import twiter from "../assets/x.png";
import cycle from "../assets/cycle.png";

export default function RandomQuote() {
  const [quote, setQuote] = React.useState({
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  });

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div className="bottom">
        <div className="author">{quote.author}</div>
        <div className="icons">
          <img src={cycle} alt="" />
          <img src={twiter} alt="" />
        </div>
      </div>
    </div>
  );
}

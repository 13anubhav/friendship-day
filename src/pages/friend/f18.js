import React, { useState } from 'react';
import axios from 'axios';

const FriendshipCard = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchFriendshipQuote = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes',
        {
          params: {
            category: 'friendship'
          },
          headers: {
            'X-RapidAPI-Key': 'c3e7e0f9a2msh9541025fef72972p19b90ejsn2b4a44807bbe',
            'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
          }
        }
      );
      if (response.data && response.data.length > 0) {
        setQuote(response.data[0].quote);
      } else {
        setQuote('No quotes found.');
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>FRIENDSHIP QUOTE</h1>
      </div>
      <button className="button" onClick={fetchFriendshipQuote} disabled={loading}>
        Click Me
      </button>
      {quote && (
        <div className="app">
          <div className="card">
            <p>{quote}</p>
          </div>
        </div>
      )}
      <style jsx global>{`
        /* Your CSS styles here */
        /* Created by NinjaGamer */
        :root {
          --gradient: linear-gradient(
            rgb(95, 200, 250),
            rgb(84, 170, 250)
          );
          --transparent: rgba(255, 255, 255, 0.2);
          --transparent2: rgba(255, 255, 255, 0.6);
        }
        body {
          background: var(--gradient);
          height: 100vh;
          overflow: hidden;
          margin: 0;
          font-family: Poppins;
        }
        .flex {
          display: flex;
        }
        .input > div:nth-child(1) {
          width: 100%;
        }
        .container {
          max-width: 800px;
          left: 50%;
          top: 50vh;
          transform: translate(-50%, -50%);
          position: absolute;
          display: block;
          width: 90%;
          z-index: 1000;
        }
        .app {
          margin-top: 15%;
          padding: 5%;
          width: 90%;
          border-radius: 10px;
          text-align: left;
          background: var(--transparent);
          border: 1px solid var(--transparent);
        }
        .button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .button:hover {
          background-color: #2980b9;
        }
        .card {
          border: 1px solid #ccc;
          padding: 20px;
          text-align: center;
          width: 80%;
          max-width: 400px;
          margin-top: 20px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          background-color: white;
        }
        p {
          font-size: 18px;
        }
        img {
          background: none;
          border: none;
          position: relative;
          margin-top: 20px;
          width: 128px;
          left: 50%;
          transform: translate(-50%);
          height: 128px;
          outline: none;
          border-radius: 5px;
        }
        img:after {
          content: "Condition image";
          position: absolute;
          top: 0px;
          left: 0px;
          width: 128px;
          height: 128px;
          background: white;
          text-align: center;
          line-height: 128px;
          font-size: 12px;
          color: rgb(84, 170, 250);
          border-radius: 5px;
        }
        h1 {
          padding-top: 10px;
          background: none;
          margin: 0;
        }
        h1 span {
          display: block;
          left: 50%;
          transform: translate(-50%);
          position: relative;
          color: white;
          padding-bottom: 20px;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--transparent);
        }
        h1,
        h2,
        h3 {
          text-align: center;
          color: white;
        }
        #datos {
          text-align: center;
          font-size: 14px;
          color: white;
        }
        #datos span:nth-child(2) {
          border-left: 1px solid;
          border-right: 1px solid;
          padding-left: 5px;
          padding-right: 5px;
        }
        button:active {
          user-select: none;
          transform: scale(0.9);
        }
        .blub {
          width: 1px;
          height: 1px;
          border-radius: 150px;
          background: radial-gradient(
            transparent,
            rgba(255, 255, 255, 0.5)
          );
          animation: anim 0.3s linear;
          z-index: -10;
          position: absolute;
        }
        @keyframes anim {
          100% {
            transform: scale(100);
            opacity: 0;
          }
        }
        .heading {
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default FriendshipCard;
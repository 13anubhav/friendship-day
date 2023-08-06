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
      <div className="card">
        <h1 className="heading">Friendship Quotes</h1>
        <p className="quote">{quote}</p>
        <button className="button" onClick={fetchFriendshipQuote} disabled={loading}>
          Get Another Quote
        </button>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(180deg, #2980b9, #3498db);
          font-family: 'Helvetica Neue', sans-serif;
        }
        .card {
          background-color: white;
          border-radius: 10px;
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
          width: 80%;
          max-width: 500px;
          color: #333;
        }
        .heading {
          font-size: 24px;
          margin-bottom: 10px;
          color: #3498db;
        }
        .quote {
          font-size: 18px;
          margin-bottom: 20px;
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
      `}</style>
    </div>
  );
};

export default FriendshipCard;

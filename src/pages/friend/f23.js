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
          Get Inspired
        </button>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: #f3f3f3;
        }
        .card {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          padding: 30px;
          text-align: center;
          width: 80%;
          max-width: 500px;
        }
        .heading {
          color: #3498db;
          font-size: 24px;
          margin-bottom: 10px;
        }
        .quote {
          font-size: 18px;
          margin: 20px 0;
        }
        .button {
          background-color: #3498db;
          border: none;
          border-radius: 4px;
          color: white;
          cursor: pointer;
          font-size: 16px;
          padding: 10px 20px;
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

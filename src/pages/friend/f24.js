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
        <h1 className="header">Friendship Quotes</h1>
        <button className="button" onClick={fetchFriendshipQuote} disabled={loading}>
          Get a Quote
        </button>
        {quote && (
          <div className="quote">
            <p>{quote}</p>
          </div>
        )}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .card {
          background-color: #f5f5f5;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .header {
          font-size: 24px;
          color: #333;
          margin-bottom: 10px;
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
        .quote {
          margin-top: 20px;
        }
        p {
          font-size: 18px;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default FriendshipCard;

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
      <div className="content">
        <h1 className="heading">Friendship Quotes</h1>
        <div className="image-container">
          <img
            className="center-image"
            src="/img.jpg"
            alt="Friendship Image"
          />
        </div>
        {/* <button className="button" onClick={fetchFriendshipQuote} disabled={loading}>
          Get Inspired
        </button> */}
        {quote && (
          <div className="quote-card">
            <p className="quote">{quote}</p>
          </div>
        )}
        {/* <div className="image-container">
          <img
            className="center-image"
            src="/img.jpg"
            alt="Friendship Image"
          />
        </div> */}

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
          background-color: #f5f5f5;
        }
        .content {
          text-align: center;
        }
        .heading {
          font-size: 36px;
          margin-bottom: 20px;
          color: #333;
        }
        .button {
          padding: 10px 20px;
          font-size: 18px;
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
        .quote-card {
          border: 1px solid #ccc;
          padding: 20px;
          text-align: center;
          background-color: white;
          max-width: 500px;
          margin-top: 20px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }
        .quote {
          font-size: 20px;
          line-height: 1.6;
          color: #555;
        }
        .image-container {
          margin-top: 20px;
        }
        .center-image {
          border-radius: 50%;
          width: 150px;
          height: 150px;
          object-fit: cover;
          border: 2px solid #3498db;
        }
      `}</style>
    </div>
  );
};

export default FriendshipCard;

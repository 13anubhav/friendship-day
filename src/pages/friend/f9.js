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
    <div>
      <button onClick={fetchFriendshipQuote} disabled={loading}>
        Click Me
      </button>
      {quote && (
        <div className="card">
          <p>{quote}</p>
        </div>
      )}
      <style jsx>{`
        button {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
        }
        .card {
          border: 1px solid #ccc;
          padding: 20px;
          text-align: center;
          width: 300px;
          margin: 20px auto;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        }
        p {
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default FriendshipCard;

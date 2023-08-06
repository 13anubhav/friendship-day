import React, { useState } from 'react';
import axios from 'axios';

const FriendshipPage = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const options = {
        method: 'GET',
        url: 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes',
        params: {
          category: 'friendship'
        },
        headers: {
          'X-RapidAPI-Key': 'c3e7e0f9a2msh9541025fef72972p19b90ejsn2b4a44807bbe',
          'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
        }
      };

      const response = await axios.request(options);
      if (response.data && response.data.length > 0) {
        setQuote(response.data[0].quote);
      } else {
        setQuote('No quotes available at the moment.');
      }
    } catch (error) {
      console.error(error);
      setQuote('An error occurred while fetching the quote.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchQuote} disabled={isLoading}>
        Click Me
      </button>
      {quote && (
        <div className="card">
          <p>{quote}</p>
        </div>
      )}
      <style jsx>{`
        .card {
          border: 1px solid #ccc;
          padding: 20px;
          text-align: center;
          width: 300px;
          margin: 50px auto;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        }
        p {
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default FriendshipPage;

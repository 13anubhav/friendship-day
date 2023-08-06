import React, { useState } from 'react';

const IndexPage = () => {
  const [showCard, setShowCard] = useState(false);

  const handleButtonClick = () => {
    setShowCard(true);
  };

  return (
    <div className="container">
      <h1>Friendship Greetings</h1>
      <button onClick={handleButtonClick}>Click Me</button>
      {showCard && (
        <div className="card">
          <h2>Friendship Message</h2>
          <p>"A true friend is someone who knows the song in your heart and can sing it back to you when you have forgotten the words." - Unknown</p>
        </div>
      )}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          font-family: Arial, sans-serif;
        }
        h1 {
          font-size: 24px;
          margin-bottom: 20px;
        }
        button {
          padding: 10px 20px;
          font-size: 18px;
          cursor: pointer;
        }
        .card {
          border: 2px solid #ccc;
          padding: 20px;
          margin-top: 20px;
          background-color: #f5f5f5;
        }
        h2 {
          font-size: 20px;
          margin-bottom: 10px;
        }
        p {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;

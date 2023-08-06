import React, { useState } from 'react';

const FriendshipCard = () => {
  const [showCard, setShowCard] = useState(false);

  const handleButtonClick = () => {
    setShowCard(true);
  };

  return (
    <div>
      <button className="click-button" onClick={handleButtonClick}>Click Me</button>
      {showCard && (
        <div className="card">
          <h1>Friendship Message</h1>
          <p>"A real friend is one who walks in when the rest of the world walks out." - Walter Winchell</p>
        </div>
      )}
      <style jsx>{`
        .click-button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
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
        h1 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        p {
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default FriendshipCard;

import React, { useState } from 'react';

const FriendshipCard = () => {
  const [cardOpen, setCardOpen] = useState(false);

  const handleButtonClick = () => {
    setCardOpen(true);
  };

  return (
    <div className="friendship-card">
      <button className="button" onClick={handleButtonClick}>
        Click Me
      </button>
      {cardOpen && (
        <div className="card">
          <h1>Friendship Day</h1>
          <p>"A real friend is one who walks in when the rest of the world walks out." - Walter Winchell</p>
        </div>
      )}
      <style jsx>{`
        .friendship-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 50px;
        }
        .button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #007bff;
          color: #fff;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .button:hover {
          background-color: #0056b3;
        }
        .card {
          border: 1px solid #ccc;
          padding: 20px;
          text-align: center;
          width: 300px;
          margin-top: 20px;
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

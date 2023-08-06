import React, { useState } from 'react';

const FriendshipCard = () => {
  const [unfolded, setUnfolded] = useState(false);

  const handleUnfold = () => {
    setUnfolded(true);
  };

  return (
    <div className={`envelope ${unfolded ? 'unfolded' : ''}`} onClick={handleUnfold}>
      <div className="card">
        <div className="message">
          <h1>Friendship Day</h1>
          <p>"A real friend is one who walks in when the rest of the world walks out." - Walter Winchell</p>
        </div>
      </div>
      <style jsx>{`
        .envelope {
          position: relative;
          width: 300px;
          height: 200px;
          background-color: #f4f4f4;
          border: 1px solid #ccc;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          transition: transform 0.5s ease-in-out;
        }
        .envelope.unfolded {
          transform: rotateX(180deg);
        }
        .card {
          width: 100%;
          height: 100%;
          position: absolute;
          transform-style: preserve-3d;
        }
        .message {
          width: 100%;
          height: 100%;
          padding: 20px;
          text-align: center;
          backface-visibility: hidden;
          background-color: white;
          border: 1px solid #ccc;
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

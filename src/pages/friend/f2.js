import React, { useState } from 'react';

const FriendshipCard = () => {
  const [unfolded, setUnfolded] = useState(false);

  const handleEnvelopeClick = () => {
    setUnfolded(true);
  };

  return (
    <div className={`envelope ${unfolded ? 'unfolded' : ''}`} onClick={handleEnvelopeClick}>
      <div className="flap"></div>
      <div className="message">
        <h1>Friendship Day</h1>
        <p>"A real friend is one who walks in when the rest of the world walks out." - Walter Winchell</p>
      </div>
      <style jsx>{`
        .envelope {
          position: relative;
          width: 300px;
          height: 200px;
          background-color: #ffffff;
          border: 2px solid #000000;
          border-radius: 10px;
          cursor: pointer;
        }
        .flap {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 150px 150px 150px;
          border-color: transparent transparent #ffffff transparent;
        }
        .message {
          display: none;
          padding: 20px;
          text-align: center;
        }
        .unfolded .flap {
          border-color: transparent transparent #ffffff transparent;
        }
        .unfolded .message {
          display: block;
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

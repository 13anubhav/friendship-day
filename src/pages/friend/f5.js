import React, { useState } from 'react';

const FriendshipCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`card ${isOpen ? 'open' : ''}`} onClick={handleEnvelopeClick}>
      <div className="envelope">
        <div className="envelope-top">
          <div className="flap-left"></div>
          <div className="flap-right"></div>
        </div>
        <div className="message">
          <h1>Friendship Day</h1>
          <p>"A real friend is one who walks in when the rest of the world walks out." - Walter Winchell</p>
        </div>
      </div>
      <style jsx>{`
        .card {
          width: 300px;
          height: 300px;
          position: relative;
          transition: transform 0.5s;
          cursor: pointer;
        }
        .envelope {
          width: 100%;
          height: 100%;
          background-color: #f0f0f0;
          position: absolute;
          border: 2px solid #333;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        }
        .envelope-top {
          display: flex;
          justify-content: space-between;
          padding: 10px;
        }
        .flap-left,
        .flap-right {
          width: 50px;
          height: 20px;
          background-color: #f0f0f0;
          border: 1px solid #333;
        }
        .flap-left {
          transform-origin: left top;
          transform: rotate(-45deg);
        }
        .flap-right {
          transform-origin: right top;
          transform: rotate(45deg);
        }
        .message {
          padding: 20px;
        }
        h1 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        p {
          font-size: 18px;
        }
        .open {
          transform: translateY(-150px) rotateX(90deg);
        }
      `}</style>
    </div>
  );
};

export default FriendshipCard;

import React from 'react';

const FriendshipCard = () => {
  return (
    <div className="card">
      <h1>Friendship Day</h1>
      <p>"A real friend is one who walks in when the rest of the world walks out." - Walter Winchell</p>
      <style jsx>{`
        .card {
          border: 1px solid #ccc;
          padding: 20px;
          text-align: center;
          width: 300px;
          margin: 50px auto;
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

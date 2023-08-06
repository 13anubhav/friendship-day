import React, { useState } from 'react';

const FriendshipCard = () => {
  const [isUnfolded, setIsUnfolded] = useState(false);

  const handleUnfold = () => {
    setIsUnfolded(true);
  };

  return (
    <div className={`card ${isUnfolded ? 'unfolded' : ''}`} onClick={handleUnfold}>
      <div className="base">
        <div className={`cover cover-left`}></div>
        <div className={`cover cover-right`}></div>
        <div className={`letter ${isUnfolded ? 'open' : ''}`}></div>
        <div className={`paper ${isUnfolded ? 'show' : ''}`}>
          <h3>Friendship Day</h3>
          <h4>"A real friend is one who walks in when the rest of the world walks out."</h4>
          <p>- Walter Winchell</p>
          <div className="yt">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Your provided CSS styles here */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .base {
          height: 200px;
          width: 300px;
          position: relative;
          display: flex;
          justify-content: center;
        }
        .letter {
          height: 0px;
          width: 0px;
          border-top: 100px solid red;
          border-left: 150px solid transparent;
          border-right: 150px solid transparent;
          transition: all 1s;
          transform-origin: 0px 0px;
          position: absolute;
          z-index: 6;
        }
        .letter.open {
          animation: open 1s linear forwards;
          z-index: 1;
        }
        @keyframes open {
          to {
            transform: rotateX(180deg);
          }
        }
        .letter.open ~ .paper {
          animation: show 1s 1s linear forwards;
        }
        @keyframes show {
          to {
            transform: translateY(-80px);
          }
        }
        .cover {
          position: absolute;
          z-index: 3;
          top: 0;
          height: 0px;
          width: 0px;
          border-top: 200px solid transparent;
        }
        .cover-left {
          border-left: 300px solid rgb(200, 0, 0);
        }
        .cover-right {
          border-right: 300px solid rgb(200, 0, 0);
        }
        .paper {
          height: 200px;
          width: 280px;
          border-radius: 5px;
          background-color: white;
          position: relative;
          z-index: 2;
          transition: all 1s 1s;
          box-shadow: 0px 0px 2px black;
        }
        h3 {
          padding: 1em 0 0 1em;
        }
        h4 {
          text-align: center;
        }
        p {
          text-align: right;
          padding-right: 1em;
        }
        .yt {
          height: 20px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 20px;
        }
        .yt > a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: white;
          font-size: 1.2em;
          border-radius: 0.5em;
          padding: 0.4em 1em;
          background-color: red;
        }
        /* Media query for iPhone */
        @media only screen and (max-width: 414px) {
          .base {
            height: 150px;
            width: 250px;
          }
          .letter {
            border-top: 75px solid red;
            border-left: 125px solid transparent;
            border-right: 125px solid transparent;
          }
          .paper {
            height: 150px;
            width: 230px;
          }
        }
      `}</style>
    </div>
  );
};

export default FriendshipCard;

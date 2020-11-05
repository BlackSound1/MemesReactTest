import React from "react";

const App = () => {
  return (
    <div className="container">
      <h1>MEMES</h1>
      <div className="memes-container">
        <div className="meme">
          <iframe
            src="https://giphy.com/embed/fJdpdS5jaDje8"
            width="300"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            title="dogs running"
          />
        </div>

        <div className="meme">
          <iframe
            src="https://giphy.com/embed/13mLwGra9bNEKQ"
            width="300"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            title="dogs running 2"
          />
        </div>

        <div className="meme">
          <iframe
            src="https://giphy.com/embed/mokQK7oyiR8Sk"
            width="300"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            title="dogs running 3"
          />
        </div>
      </div>
    </div>
  );
};

export default App;

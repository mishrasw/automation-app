import React from 'react';
import "../style/AnimatedTextImage.css"

const AnimatedTextImage = ({ title, text, image }) => {
  return (
    <div className="container">
      <div className="image">
        <img src={image} alt="Sample" />
      </div>
      <div className="text">
        <h1>{title}</h1>
        {Array.isArray(text)
        ? text.map(element => {
            return <p>{element}</p>;
          })
        : text}
      </div>
    </div>
  );
};


export default AnimatedTextImage;
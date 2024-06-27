// src/components/Square.js
import React from 'react';
import '../style/Square.css';

const Square = ({ text, delay }) => {
  return (
    <div className="square" style={{ animationDelay: `${delay}s` }}>
      {text}
    </div>
  );
};

export default Square;

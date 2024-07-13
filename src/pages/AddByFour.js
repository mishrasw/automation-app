import React, {useState} from "react";
import "../style/About.css"



const generateRandomNumbers = () => {
  return {
    num1: Math.floor(Math.random() * 30)+1,
    //num2: Math.floor(Math.random() * 100),
    num2: Math.floor(Math.random() * 4)+1,
  };
};

const AddByFour = () => {
  const [questions, setQuestions] = useState(Array.from({ length: 10 }, generateRandomNumbers));
  const [answers, setAnswers] = useState(Array(10).fill(''));
  const [showCongrats, setShowCongrats] = useState(false);
  const [results, setResults] = useState([]);
  
  const openPopupWindow = () => {
    const popupWindow = window.open(
      "",
      "popup",
      "width=300,height=300,left=100,top=200"
    );

    if (popupWindow) {
      popupWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Congratulations</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #00ffff;}
            button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
          </style>
        </head>
        <body>
          <h2>★ ★ ★ ★ ★</h2>
          <h2>CONGRATULATIONS</h2>
          <button onclick="window.close()">Close</button>
        </body>
        </html>
      `);
    }
  };

  const openPopupWindow1 = () => {
    const popupWindow1 = window.open(
      "",
      "popup",
      "width=300,height=300,left=100,top=200"
    );

    if (popupWindow1) {
      popupWindow1.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Try Again</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #ff0000;}
            button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
          </style>
        </head>
        <body>
          <h2>Better Luck Next Time !!!</h2>
          <button onclick="window.close()">Close</button>
        </body>
        </html>
      `);
    }
  };



  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const allCorrect = questions.every((q, i) => parseInt(answers[i]) === q.num1 + q.num2);
    if (allCorrect) {
      setShowCongrats(true);
      openPopupWindow(true);
    } else {
      setShowCongrats(false);
      openPopupWindow1(true);
    }

    const newResults = questions.map((question, index) => {
      const correctAnswer = question.num1 + question.num2;
      return correctAnswer === parseInt(answers[index], 10);
    });
    setResults(newResults);

  };

  return (

    <div style={{ color: 'white' }}>
    {questions.map((q, index) => (
    <div key={index}>
      <p>
        {q.num1} + {q.num2} = 
        <input
        type="number"
        value={answers[index]}
        onChange={(e) => handleChange(index, e.target.value)}
      />
      </p>
      
    </div>
  ))} 
      <button onClick={checkAnswers}>Submit</button>
      {showCongrats ?
       <h2> ★ ★ ★ ★ ★ Congratulations! You got all answers right!</h2>       
      : <h2> Better Luck Next time!</h2>}
      
      {results.length > 0 && (
          <div>
            <h2>Results</h2>
            {results.map((result, index) => (
              <div key={index}>
                Question {index + 1} : {result ? 'Correct' : 'Incorrect'}   
              </div>  
            ))} 
          </div>
          
        )}
      </div>
  );
};

export default AddByFour;

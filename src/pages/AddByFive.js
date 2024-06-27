import React, {useState} from "react";
import "../style/About.css"


const generateRandomNumbers = () => {
  return {
    num1: Math.floor(Math.random() * 100),
    //num2: Math.floor(Math.random() * 100),
    num2: 5,
  };
};

const AddByFive = () => {
  const [questions, setQuestions] = useState(Array.from({ length: 10 }, generateRandomNumbers));
  const [answers, setAnswers] = useState(Array(10).fill(''));
  const [showCongrats, setShowCongrats] = useState(false);
  const [results, setResults] = useState([]);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const allCorrect = questions.every((q, i) => parseInt(answers[i]) === q.num1 + q.num2);
    if (allCorrect) {
      setShowCongrats(true);
    } else {
      setShowCongrats(false);
    }

    const newResults = questions.map((question, index) => {
      const correctAnswer = question.num1 + question.num2;
      return correctAnswer === parseInt(answers[index], 10);
    });
    setResults(newResults);

  };

  return (
    <div  style={{ color: 'white' }}>
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

export default AddByFive;

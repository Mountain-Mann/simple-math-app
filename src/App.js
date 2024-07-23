import React, { useState } from "react";

export default function Display(equation) {
  const [input, setInput] = useState(0);
  const [input1, setInput1] = useState(0);
  const [operation, setOperation] = useState('+')
  
  const operations = ['+', '-', '/', 'x']

  const handleInput = (e) => {
    setInput(Number(e.target.value));
  };

  const handleInput1 = (e) => {
    setInput1(Number(e.target.value));
  };

  const handleOpChange = (e) => {
    setOperation(e.target.value)
  };

  const handleReset = () => {
    setInput(0);
    setInput1(0);
    setOperation('+');
  };

  const calculateEquation = () => {
    let answer;
    switch (operation) {
      case '+':
        answer = input + input1;
        break;
      case '-':
        answer = input - input1;
        break;
      case '/':
        answer = input / input1;
        break;
      case 'x':
        answer = input * input1;
        break;
      default:
        answer = 'Invalid operation';
    }
    return <p className='answer'>{input} {operation} {input1} = {answer}</p>;
  };

  return (
    <>
      <h1 className='title'>Do some math!</h1>
      <div className='selectOperations'>
        <h3>1. Select operation:</h3>
        <div>
          {operations.map((op, index) => (
            <label key={index}>
              <input
                id='operation'
                type="radio"
                name="operation"
                value={op}
                checked={operation === op}
                onChange={handleOpChange}
              />
              {op}
            </label>
          ))}
        </div>
      </div>

      <h3>2. Type two numbers: </h3>
        <div className='inputs'>
          <input id='input' className='numberInput' onChange={handleInput} value={input} />
          <input id='input1' className='numberInput' onChange={handleInput1} value={input1} />
        </div>

      <h3>3. See the answer: </h3>
        {calculateEquation()}
      <button id='reset' onClick={() => handleReset()}>Reset</button>
    </>
  );
}
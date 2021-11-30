import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const WINS = {
  rock : 'scissor',
  scissor : 'paper',
  paper : 'rock'
};

function handleClick(){
  console.log("가위바위보!");
  
}
function getResult(left, right){
  if (WINS[left] === right) return '승리';
  else if (left === WINS[right]) return '패배';
  return '무승부';
}

const me = "rock";
const other = "scissor";
const result = getResult(me, other)


ReactDOM.render(
  <>
  <h1 id="title">가위바위보</h1>
  <h2 id="result">{result}</h2>
  <button className="hand" onClick={handleClick}>가위</button>
  <button className="hand" onClick={handleClick}>바위</button>
  <button className="hand" onClick={handleClick}>보</button>
  <App></App>
  </>,
  document.getElementById('root')
);


import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) => <h1>{text}</h1>

const Feedback = ({ text, score }) => <p>{text} {score}</p>

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
)

const Display = () => (
  <div>
  <Header text="give feedback" />
  <Button text="good" handleClick={handleGood} />
  <Button text="neutral" handleClick={handleNeutral} />
  <Button text="bad" handleClick={handleBad} />
  <Header text="statistics" />
  <Feedback text="good" score={good} />
  <Feedback text="neutral" score={neutral} />
  <Feedback text="bad" score={bad} />
</div>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (

  )
}

ReactDOM.render(<App />, document.getElementById('root'));


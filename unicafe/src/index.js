import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistic = ({ text, score, end }) => <p>{text} {score} {end}</p>

const Feedback = ({good, bad, neutral}) => {
  const all = good + bad + neutral

  const average = () => {
    if (all === 0) {
      return 0
    }
    return (good * 1 + bad * -1) / all
  }

  const positive = () => {
    if (all === 0) {
      return 0
    }
    return 100 * good / all
  }

  return (
    <div>
      <Statistic text="good" score={good} />
      <Statistic text="neutral" score={neutral} />
      <Statistic text="bad" score={bad} />
      <Statistic text="all" score={all} />
      <Statistic text="average" score={average()} />
      <Statistic text="positive" score={positive()} end="%" />
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Header text="give feedback" />
      <Button text="good" handleClick={handleGood} />
      <Button text="neutral" handleClick={handleNeutral} />
      <Button text="bad" handleClick={handleBad} />
      <Header text="statistics" />
      <Feedback good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote = ({ anecdotes, points, index }) => (
  <div>
    <p>{anecdotes[index]}<br />
    has {points[index]} votes</p>
  </div>
)

const MostVoted = ({ anecdotes, points, index }) => {
  if (points[index] === 0) {
    return (
      <div>
        <Title text="Anecdote with most votes" />
        <p>No votes yet.</p>
      </div>
    )
  }
  return (
    <div>
      <Title text="Anecdote with most votes" />
      <Anecdote anecdotes={anecdotes} points={points} index={index} />
    </div>
  )
}


const App = ({ anecdotes }) => {

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const randomNb = () => {
    let random = Math.floor(Math.random() * anecdotes.length)
    while (random === selected) {
      random = Math.floor(Math.random() * anecdotes.length)
    }
    return random
  }
  
  const handleNext = () => setSelected(randomNb)

  const handleVote = () => {
    const copy = [ ...points ]
    copy[selected] += 1
    setPoints(copy)
  }

  const mostVotedIndex= () => {
    let max = 0
    for (let i = 1; i < points.length; i++) {
      if (points[i] > points[max]) {
        max = i
      }
    }
    return max
  }

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Anecdote anecdotes={anecdotes} points={points} index={selected} />
      <Button text="vote" handleClick={handleVote} />
      <Button text="next anecdote" handleClick={handleNext} />
      <MostVoted anecdotes={anecdotes} points={points} index={mostVotedIndex()} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.',
  'How does a project get to be a year late?... One day at a time.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

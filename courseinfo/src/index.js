import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({course}) => <h1>{course}</h1>

const Part = ({part}) => {
  const { name, exercises } = part

  return (
    <p>{name} {exercises}</p>
  )
}

const Content = ({parts}) => {
  const [part1, part2, part3] = parts
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} /> 
      <Part part={part3} /> 
    </div>)
}

const Total = ({parts}) => {
  const [part1, part2, part3] = parts
  const sum = part1.exercises + part2.exercises + part3.exercises

  return (
  <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises : 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react'
import ReactDOM from 'react-dom'

import { Header } from './components/Header'
import { Content } from './components/Content'
import Total from './components/Total'

const App = () => {
  const courseName = 'Half Stack application development'
  const content = [
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
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={courseName} />
      <Content part1={content[0]} part2={content[1]} part3={content[2]}/>
      <Total total={content[0]['exercises'] + content[1]['exercises'] + content[2]['exercises']} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

export default App

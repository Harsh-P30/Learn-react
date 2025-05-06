import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  componentDidMount =() =>{
    console.log("When component render first time");
  }


  return (
    <>
      <h1>hello</h1>
    </>
  )
}

export default App

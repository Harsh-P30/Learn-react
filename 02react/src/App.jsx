import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  // let counter =5;

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  const subValue = () => {
    if(counter >0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Hello Master! welcome back</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add</button> <br /> <br />
      <button onClick={subValue}>Remove</button>
    </>
  )
}

export default App

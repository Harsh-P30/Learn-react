import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  function cubeNum(num) {
    console.log('Calculation done!');
    return Math.pow(num, 3);
  };

  const result = useMemo(() => cubeNum(num), [num]);


  return (
    <>
      <input type="number" value={num} onChange={(e) => {
        setNum(e.target.value);
      }} />
      <h1>Cube of the number: {result}</h1>

      <button onClick={() => {
        setCount(count + 1)
      }}>Counter++</button>
      <h1>counter: {count}</h1>

    </>
  )
}

export default App

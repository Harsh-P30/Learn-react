import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [num, setnum] = useState(0)

  useEffect(() => {   // Run only one time(render)
    alert("Hey welcome");
  },[])

  useEffect(() => {   // Run on every render.
    alert("Hey welcome");
  })  


  useEffect(() => {  // Run when change in perticular state or props.{here when count change}
    alert(`First count is ${count}`)
  },[count])

  useEffect(() => {  // Run when change in perticular state or props. {here when num change}
    alert(`Second count is ${num}`);
  },[num])


  return (
    <>
    <h1>{count}</h1>
    <button onClick={() =>{
      setCount(count+1);
    }}>click me</button>

    <h1>{num}</h1>
    <button onClick={() =>{
      setnum(num+1);
    }}>click me</button>


    </>
  )
}

export default App

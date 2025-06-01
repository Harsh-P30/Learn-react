
import { useEffect,useState } from 'react'
import './App.css'

function App() {
  
  let [input,setInput]=useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      setInput(input+1);
    },1000)

  })
  
  return (
    <>
     <h1>{input}</h1>
     <button onClick={()=>{
      setInput(++input)
     }}>click me</button>
    </>
  )
}

export default App

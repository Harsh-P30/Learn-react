import { useCallback, useState } from 'react'

import './App.css'
import Header from './component/header'

function App() {
  const [count, setCount] = useState(0);

  const newFn = useCallback(()=>{
    
  },[])
  

  return (
    <>
      <Header newFn={newFn}/>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>click</button>
    </>
  )
}

export default App

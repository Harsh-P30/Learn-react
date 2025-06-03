import { useEffect, useLayoutEffect } from 'react'
import './App.css'

function App() {

  useEffect(()=>{
    console.log('message');
    
  },[])

  useLayoutEffect(()=>{
    console.log('message from useLayoutEffect');
  },[])


  return (
    <>
      <h1>Test msg</h1>
    </>
  )
}

export default App

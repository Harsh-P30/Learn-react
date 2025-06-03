import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  //create state
  //manage state
  //change state
  // svi child me state ko sync krwa dunga

  const [name,setName]= useState('');


  return (
    <>

    <Card name={name} setName={setName}/>
    <Card name={name} setName={setName}/>
    
    </>
  )
}

export default App

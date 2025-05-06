import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const fruits = ['Apple 🍎', 'Mango 🥭', 'Orange 🍊', 'Pineapple 🍍'];
  return (
    <>

      {/* <div>
      {
        fruits.map(fruit => ( // if you directly do this without any key value the console give error{Each child in a list should have a unique "key" prop.
          <h1>{fruit}</h1>
        ))
      }
      </div> 
       */}

      {

        fruits.map((fruit,index )=> (
          <h1 key={index}>{fruit}</h1>
        ))
      }


    </>
  )
}

export default App

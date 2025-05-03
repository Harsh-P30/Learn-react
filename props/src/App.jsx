import { useState } from 'react'
import React from 'react';
import './index.css'
import Card from './component/card'

// function App() {
//   const [count, setCount] = useState(0)
//   let myObj={
//     // name, // If I don’t explicitly set a new value, and the old build or React state still has old values, they may keep showing in the UI until I update or rebuild — but it’s not because the DOM stores variables; it’s because React and the JS bundle control the DOM.


//     // if we not initilizing variable "name" in Card it take default values and variable directly.
//     rollNo:3,
//     bg:"bg-red-600"
//   }

//   console.log(name);
//   return (
//     < >
//       <div className='w-full min-h-screen text-5xl flex flex-col justify-center items-center p-10'>
//         <h1>Hello Master</h1>
//         <Card  obj = {myObj}/>
//       </div>
//     </>
//   )
// }


function App() {
  const myObj = {
    name: 'Harsh',
    rollNo: 3,
    bg: 'bg-[url(https://imgs.search.brave.com/yeBW-s0eHH831qM3mXIVv4kua6vPL7Xmuzh4byhGDZU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9keWwz/NDdoaXd2M2N0LmNs/b3VkZnJvbnQubmV0/L2FwcC91cGxvYWRz/LzIwMjUvMDMvNTMx/Mzk5Njk0MjRfNTg4/YzAyZmJkY19vLXNj/YWxlZC5qcGc)]',
    color:'text-white'  // pass Tailwind class here
  };

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center p-10'>
      <h1 className='text-5xl mb-4'>Hello Master</h1>
      <Card obj={myObj} />
    </div>
  );
}

export default App;



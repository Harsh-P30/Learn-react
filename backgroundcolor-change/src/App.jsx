import { useState } from "react"

function App() {

  const [color,setColor] =useState("olive")
  return (
    <>
      <div className="h-screen w-full duration-150" style={{backgroundColor:color}}></div>

      <div className="flex fixed justify-center flex-wrap bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white">

          <button
          onClick={() => setColor("white")}
           className="outline-none px-5 py-1 bg-white border-2 rounded-full">Red
          </button>
          <button 
          onClick={() => setColor("blue")}
          className="outline-none px-5 py-1 bg-blue-800 text-white rounded-full">Red
          </button>
          <button
          onClick={()=>setColor("red")}
           className="outline-none px-5 py-1 bg-red-800 text-white rounded-full">Red
          </button>
          <button 
          onClick={()=>setColor("black")}
          className="outline-none px-5 py-1 bg-black text-white rounded-full">Red
          </button>
          <button
          onClick={()=>{setColor("green")}}
           className="outline-none px-5 py-1 bg-green-600 text-white rounded-full">Red
          </button>


          
        </div>
      </div>
    </>
  )
} 

export default App

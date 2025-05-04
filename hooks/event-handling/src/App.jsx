import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [text,setText]=useState("Harsh");
  const [form, setForm] = useState({ name: "", ph: "" });

  const handelclick = () => {
    alert("Aauch hit wrong spot!🤤")
  }

  // const handelChange = (e)=>{
  //     setText(e.target.value)
  // }
  const handelForm = (e) => {
    if ('name' === e.target.name) {
      setForm({ ...form, name: e.target.value });
    }

    if ('ph' === e.target.name) {
      setForm({ ...form, ph: e.target.value })
      
    }

  }

  return (
    <>
      <div className="button">
        <button onClick={handelclick}>Hit me daddy🤤</button>
      </div>
      {/* 
      <input type="text" name="" id="" value={text} onChange={handelChange} />   */}

      <input type="text" name="name" id="" value={form.name} onChange={handelForm} placeholder='Enter Name' />

      <input type="number" name="ph" id="" value={form.ph} onChange={handelForm} placeholder='Enter Ph no'/>

    </>
  )
}

export default App

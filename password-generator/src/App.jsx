import { useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_{}[]+-*/~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg my-8 text-white bg-gray-700 flex flex-col items-center gap-5">

      <h1 className="text-center pt-4">Password Generator</h1>

      <div className="flex gap-4 items-center justify-center ">

        <input type="text" value={password} className="outline-none w-sm max-w-lg py-2 px-3  bg-white text-black rounded-sm" placeholder="Password" readOnly />

        <button className="px-4 py-2 bg-black rounded text-center">copy</button>

      </div>

      <div>
        <button
          className="bg-blue-500 px-4 py-2 mb-4 rounded-xl"
          onClick={passwordGenerator}
        >
          Generate Password
        </button>
      </div>

      <div className="flex gap-2 pb-6">
        <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e) => {
          setLength(e.target.value)
        }} />
        <label className="mr-3"> lenght: {length}</label>

        <label htmlFor="inputNumber">Number Allowed : </label>
        <input className="mr-3" type="checkbox" id="inputNumber" defaultChecked={numberAllowed} onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}
        />

        <label htmlFor="inputChar">Char Allowed: </label>
        <input type="checkbox" id="inputChar" defaultChecked={charAllowed} onChange={() => {
          setCharAllowed((prev) => !prev);
        }}
        />
      </div>
    </div>
  );
}

export default App;

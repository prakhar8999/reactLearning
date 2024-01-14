import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  //useref Hook
  const passwordRef = useRef(null)

  //useCallBack is used to optimize the code
  const passsowrdGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllow) {
      str = str + "0123456789"
    }
    if(charAllow){
      str = str + "!@#$%^&*-_+=[]{}~`"
    }
    for (let i = 1; i <= length; i++) {
      let randomNum = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(randomNum)
    }
    setPassword(pass);

  }, [length, numAllow, charAllow, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  //useEffect is used to re-run if any change in the dependency
  useEffect(() => {
    passsowrdGenerator()
  }, [length, numAllow, charAllow])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllow}
            id="numberInput"
            onChange={() => {
            setNumAllow((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                setCharAllow((prev) => !prev )
              }}
            />
            <label htmlFor="characterInput">Characters</label>
        </div>
        </div>
      </div>
    </>
  )
}

export default App

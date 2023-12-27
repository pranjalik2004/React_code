import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, settext] = useState('hello')
  const handlechange = (e) => {
    let msg = e.target.value
    settext(msg)
  }

  return (
    <>
      <div>
        <input type='text' value={text} onChange={handlechange}></input>
      </div>
      <p>you typed:{text}</p>
    </>
  )
}

export default App

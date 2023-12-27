import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState({left:0,right:0})
  const buttonclick1=()=>{
    let x={...count,left:count.left+1}
    setCount(x)
  }
  const buttonclick2=()=>{
    let x={...count,right:count.right+1}
    setCount(x)
  }
  return (
    <>
      <div>
      <button onClick={buttonclick1}> increment left </button>
      <p>left count is :{count.left}</p>
      <br></br>
      <button onClick={buttonclick2}> increment right</button>
      <p>right count is :{count.right}</p>
       </div>
    </>
  )
}

export default App

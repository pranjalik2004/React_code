import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const buttonclick1=()=>{
    return(
    setCount(count+1) 
    )
  }
  const buttonclick2=()=>{
    return(
    setCount(count-1) 
    )
  
  }
  const buttonclick3=()=>{
    return(
    setCount(0) 
    )
  
  }
  return (
    <>
      <div>
      <button onClick={buttonclick1}> increment</button>
      <button onClick={buttonclick2}> decrement</button>
      <button onClick={buttonclick3}> zero</button>
        <p>count is :{count}</p>
        </div>
    </>
  )
}

export default App

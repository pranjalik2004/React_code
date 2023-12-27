import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let Hello=()=> {
  return (
    <div>
      
        hello world
      
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>hello</p>
        <Hello></Hello>
        
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Hello = (value) => {
  return (
    <div>
      <p>
        Hello:{value.fname}.your age is {value.age}
      </p>
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Hello fname='pranjali' age='19'>
        </Hello><Hello fname='nikita' age='21'></Hello>
      </div>
    </>
  )
}

export default App

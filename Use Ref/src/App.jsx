import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const ref=useRef({count:0})

  const inr=()=>{
    setCount(count+1)
  }

  const inr1=()=>{
    ref.current.count+=1
    console.log("count is"+(ref.current.count))
  }
return (
    <>
      <div>
        <button onClick={inr}>Increment count</button>
        <br>
        </br>
        <button onClick={inr1}>Increment ref count</button>
       </div>
       <p>count is :{count}</p>
       <p>Ref count is: {ref.current.count} </p>
    </>
  )
}

export default App

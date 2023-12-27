import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const buttonclick=()=>{
  return(
  setCount(count+1) 
  )

}
  return (
    <>
      <div>
         <button onClick={buttonclick}> click here</button>
        <p>count is :{count}</p>
       </div>
    </>
  )
}

export default App

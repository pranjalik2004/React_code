import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [checked, setChecked] = useState(false)

  const handlechecked=(e)=>{
    setChecked(e.target.checked)
  }
   return (
    <>
      <div>
        <label>
          <input type='checkbox' checked={checked} onChange={handlechecked}></input>
          you know react
        </label>
       </div>
       <p>
       { checked ?' you know react' : 'you dont know react' } 
       </p>
    </>
  )
}

export default App

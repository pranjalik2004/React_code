import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Hello=({fname,age})=>
{
return(
  <div>
    <p>
      hello:{fname}. your age is{age}
    </p>
  </div>
)
}
function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Hello fname='pranjali' age='19'></Hello>
        </div>
    </>
  )
}

export default App

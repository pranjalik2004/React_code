import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Hello=(value)=>{
  //helper function
  const getyear=()=>{
    const d=new Date()
    const year=d.getFullYear()
    return (year-value.age)
  }
  return(
    <div>
      <p>hello {fname.value},your birth year is {getyear()}</p>
    </div>
  )
}
function App() {
 

  return (
    <>
      <div>
          <Hello fname='pranjali' age='19'></Hello>
          <Hello fname='janhavi' age='23'></Hello>
        </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
const nameref=useRef(null)
const maleref=useRef(null)
const femaleref=useRef(null)
const checkref=useRef(null)

const ButtonClick=()=>{
  let n=nameref.current.value 
  console.log(n)

  //radiobutton
  let gender=''
  if (maleref.current.checked){
    gender='male'
  }
  if (femaleref.current.checked){
    gender='female'
  }
  console.log(gender)

  //checkbox
  let s1='deselected'
  if (checkref.current.checked){
    s1='selected'
  }
  console.log(s1)

}
  return (
    <>
    
<label><input ref={nameref}></input>enter name</label>
<br>
</br>
<label><input type='radio' ref={maleref} value='male' name='g'></input>male</label>
<label><input type='radio' ref={femaleref} value='female' name='g'></input>female</label>
<br></br>
<label><input type='checkbox' ref={checkref}></input>select me</label>
<br></br>
<button onClick={ButtonClick}>click here</button>
       
    </>
  )
}

export default App

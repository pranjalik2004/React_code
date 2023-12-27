import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const showname=memo(function show1({name}){
  console.log("showName executed at ",new Date().toLocaleTimeString());
return(
  <h2>hello{name}</h2>
)
})

const showaddress=memo(function show2({address}){
  console.log("showName executed at ",new Date().toLocaleTimeString());
return(
  <h2>your address{address}</h2>
)
})

function App() {
  const [name, setname] = useState('')
  const [address, setaddress] = useState('')

  const handlechange1=(e)=>{
    setaddress(e.target.value)
  }
  const handlechange2=(e)=>{
    setaddress(e.target.value)
  }
return (
    <>
    <label>
      Enter Name 
      <input onChange={handlechange1} value={name}></input>
    </label>
    <br></br>
    <label>
      Enter Address 
      <input onChange={handlechange2} value={address}></input>
    </label>
    <showname name={name}></showname>
    <br></br>
    <showaddress address={address}></showaddress>
    </>
  )
}

export default App

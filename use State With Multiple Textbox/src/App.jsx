import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setdata] = useState({ fname: '', lname: '', email: '' })

  const handlefnamechange = (e) => {
    let msg = e.target.value
    setdata({ ...data, fname: msg })
  }
  const handleLNameChange = (e) => {
    let msg = e.target.value
    setdata({ ...data, lname: msg })
  }
  const handleEmailchange = (e) => {
    let msg = e.target.value
    setdata({ ...data, email: msg })
  }
  return (
    <>
      <div>
        <p><input type='text' value={data.fname} onChange={handlefnamechange}></input></p>
        <p><input type='text' value={data.lname} onChange={handleLNameChange}></input></p>
        <p><input type='text' value={data.email} onChange={handleEmailchange}></input></p>
      </div>
      <p>
        First Name:{data.fname}
      </p>
      <p>
        Last Name:{data.lname}
      </p>
      <p>
        Email:{data.email}
      </p>
    </>
  )
}

export default App

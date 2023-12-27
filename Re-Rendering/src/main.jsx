import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
let i=0
const refresh=()=>{
  i=i+1
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App counter={i} />
  </React.StrictMode>,
)
}
setInterval( ()=>refresh(),1000)
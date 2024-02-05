
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Keyboard from './components/Keyboard'
import Mouse from './components/Mouse'
import Hardisk from './components/HDD'
import Checkout from './components/Checkout'
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home ></Home>} ></Route>
        <Route path='/Mouse' element={<Mouse></Mouse>}></Route>
        <Route path='/Keyboard' element={<Keyboard></Keyboard>}></Route>
     <Route path='/HDD' element={<Hardisk></Hardisk>}></Route>
     <Route path='/Checkout' element={<Checkout></Checkout>}></Route>
      </Routes>
      </BrowserRouter>
    
    </>
   
  )
}

export default App

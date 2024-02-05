import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import { store1 } from "./store"
import cartslice from "./cartslice"
import { cartsliceActions } from "./cartslice"



const Hardisk=()=>{
    const navigate=useNavigate()
    const ref1=useRef(null)
   
    const handlecart=()=>{
        const quantity={number:ref1.current.value}
       store1.dispatch(cartsliceActions.Hdd(quantity))
        //navigate('/Checkout')
        //console.log(quantity.value)
    }
    return(
        <>
        <div><h3>Hardisk</h3></div>
        
        <input type='Number' ref={ref1}></input>
        <br></br>
        <button onClick={handlecart}>add to card</button>
        <br></br>
        <button onClick={()=>navigate(-1)}>Back</button>
        <br>
        </br>
        <button onClick={()=>navigate('/Checkout')}>Checkout</button>
        </>
        
        
        
        
        )
}
export default Hardisk
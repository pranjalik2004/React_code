import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"
import cartslice from "./cartslice"
import { cartsliceActions } from "./cartslice"
import Checkout from "./Checkout"
import { store1 } from "./store"

const Mouse=()=>{
    const navigate=useNavigate()
    const ref1=useRef(null)
   
    const handlecart=()=>{
        const quantity={number:ref1.current.value}
       store1.dispatch(cartsliceActions.Mouse(quantity))
       // navigate('/Checkout')
        //console.log(quantity.value)
    }
return(
<>
<div><h3>Mouse</h3></div>

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
export default Mouse
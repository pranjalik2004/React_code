import { store1 } from "./store"


const Checkout=()=>{
//console.log(store1.getState().item)
return(
<>
<div><h3>Checkout</h3></div>
<br></br>
<br></br>
<div>Mouse:</div>{store1.getState().item.Mquantity}
<br></br>

<div>Keyboard:</div>{store1.getState().item.Kquantity}
<br></br>

<div>HDD:</div>{store1.getState().item.Hquantity}
</>

)


}
export default Checkout
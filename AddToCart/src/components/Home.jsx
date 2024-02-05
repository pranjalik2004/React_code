import { Link } from "react-router-dom"
import Mouse from "./Mouse"




const Home=()=>{

    return(
<>
<ul>
    <Link to='/Mouse'>Mouse</Link>
<br></br>
    <Link to='/Keyboard'>Keyboard</Link>
    <br></br>
    <Link to='/HDD'>Hardisk</Link>
    </ul>
</>
    )

}


export default Home
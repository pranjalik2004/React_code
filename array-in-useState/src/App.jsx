import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const arr=[{id:'1', name:'pranjali'},
  {id:'2', name:'nikita'},
  {id:'3', name:'jay'},]
  const [data, setdata] = useState(arr)
   return (
    <>
      <div>
       <table border='1'>
<thead>
  <tr>
    <th>ID</th>
    <th>NAME</th>
  </tr>
</thead>
<tbody>
  {
    data.map((r)=>{
      return(
        <tr key={r.id}>
          <td>
            {r.id}
          </td>
          <td>
            {r.name}
          </td>
        </tr>
      )
    })
  }
</tbody>
       </table>
       </div>
    </>
  )
}

export default App

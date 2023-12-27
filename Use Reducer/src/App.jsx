import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


  const Reducer =(state,action)=>{
  
    switch (action.type)
    {
      case 'inr':
        return ({ count:state.count+action.value})

        case 'dcr':
          return({count:state.count-action.value})
    }
return({count:0})
  }
  function App() {
    const [state,dispatch]=useReducer(Reducer,{count:0})
  const [count, setCount] = useState(0)
const inr=()=>{
  dispatch({type:'inr',value:10})
}
const dcr=()=>{
  dispatch({type:'dcr',value:2})
}
const reset=()=>{
  dispatch({type:'reset'})
}
  return (
    <>
      <div>
        <button onClick={inr}>Incrememt</button>
        <button onClick={dcr}>Decrememt</button>
        <button onClick={reset}>Reset</button>
       </div>
       <p>
        count is:{state.count}
       </p>
    </>
  )
}

export default App


import {useState} from "react"

const ContadorApp = ({value}) => {
    const [contador,setContador]=useState(value)
    const clickk=()=>{
        setContador(contador+199800)
    }

  return (
    <>
        <h1>COTADOR: </h1>
        <h4>{contador}</h4>
        <button onClick={(eve)=>clickk(eve)}>contador</button>
    </>
  )
}

export default ContadorApp

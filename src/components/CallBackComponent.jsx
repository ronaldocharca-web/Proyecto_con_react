import React from 'react'
import Incrementar from './Incrementar'
import { useState } from 'react'

const CallBackComponent = () => {
  const [counter, setCounter] = useState(0)
  const incrementarPadre=useCallback(
    (val) => {
      setCounter(cont => cont + val)
    },
    []
  )
  return (
    <>
    <h1>Contador: {counter}</h1>
    <Incrementar incrementarPadre={incrementarPadre}></Incrementar>
    </>
  )
  
}

export default CallBackComponent

import React from 'react'

const Incrementar = React.memo(({incrementarPadre}) => {

  console.log("me estoy redibijuando")
  
  return (
    <button onClick={()=>incrementarPadre(10)}>+1</button>
)

})

export default Incrementar

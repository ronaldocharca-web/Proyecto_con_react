
import { useState } from "react"

const useConter = (valorinicial=0) => {

    const [contador, setContador] = useState(valorinicial)
    
    const incrementar=(valor=1)=>{
        setContador(contador+valor)
    }
    const decrementar=(valor=1 , estado )=>{
        if(!estado && contador - valor< 0){
            setContador(0)
            return

        }
        setContador(contador-valor)
    }
    const reset=()=>{
        setContador(0)
    }
    
    return {
        
    contador,
    incrementar,
    decrementar,
    reset
  }
}

export default useConter

import useConter from "../hooks/useConter"

const ContadorComponent = () => {

    const {contador,incrementar,decrementar,reset}=useConter(0)




  return (
   <>
   <h1>Contador : {contador}</h1>
   <button  className="btn btn-primary" onClick={()=>incrementar(1)}>+1</button>
   <button  className="btn btn-danger" onClick={()=>reset(0)}>reste</button>
   <button  className="btn btn-primary" onClick={()=>decrementar(1,false)}>-1</button>
   </>
  )
}

export default ContadorComponent

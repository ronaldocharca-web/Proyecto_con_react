
import {useState} from 'react'

const Agregartarea = ({agregarTarea}) => {
    
    const [inputValue, setInputValue] = useState('')
    
    {/*
        creamos el evneto que cada ves se guarda en el Input value
    */}
    const onInputChange=(event)=>{
            setInputValue(event.target.value)

        }

        
    {/*
            
        creamos un objeto para enviar el inputvalue
    */}
  

    const onsubmit=(event)=>{
          {/*   const envio={
                    nombre:inputValue,
                    visto:false
                    }
        event.preventDefault()
       
         al momento de agregarTaarea se adicione una nueva tarea gracia sal stateValue que dio el padre
         y par ano vorar esa lsita priemro 
         creamos una tarea donde esta priemro esta guardara als tareas y luego adicioan la tarea creada
        si o si es tareas=>[...tareas, lo demas]

            donde agregar tareas es el [setArreglo]

        */}
        event.preventDefault()
        agregarTarea(inputValue)
        }

  return (
        <form onSubmit={(event)=> onsubmit(event)}>
            <input 
                type="text" 
                placeholder='INGRESE TU RAREA'
                value={inputValue}
                onChange={(event)=>onInputChange(event)}
             />
        </form>
      ) 
}

export default Agregartarea 

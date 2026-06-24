import { useReducer } from "react"
import useForm from "../hooks/useForm"

const initialState = [{
    id: new Date().getTime(),
    tarea: "EXPLICAR REDUREC",
    finalizada: false
}]

const taraeaReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case '[TAREAS] agrega tarea':
            return [...state, action.payload]
        case '[TAREAS] Finalizar tarea':
            return state.map(tarea=> {
                if(tarea.id===action.payload){
                    console.log(tarea)
                    return {
                        ...tarea,
                        finalizada:!tarea.finalizada
                    }
                }
                return tarea

            })
        //return [...state, action.payload]
        case '[TAREAS] eliminar tarea':
            return state.filter(tarea=>tarea.id!==action.payload)
        //return [...state, action.payload]
        case '[TAREAS] Borrar tareas':
            return []


        default:
            return state

    }
    return state



}


const ListaTareas = () => {
    const [state, dispatch] = useReducer(taraeaReducer, initialState)
    const { tarea, formState, onInputChange } = useForm({  tarea:'' })

    const agregarTarea = (event) => {
        event.preventDefault()
        if (formState.tarea == "") return
        const tarea = {
            id:new  Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        console.log(tarea)
        const action = {
            type: "[TAREAS] agrega tarea",
            payload: tarea
        }
        dispatch(action)
    }
    const marcarFinalizada=({id})=>{
      
        const action ={
            type:"[TAREAS] Finalizar tarea",
            payload:id
        }
        dispatch(action)
    }
    const borrarTarea=({id})=>{
        const action ={
            type:"[TAREAS] eliminar tarea",
            payload:id
        }
        
        dispatch(action)
    }
    const eliminarTodo=()=>{
        const action ={
            type:"[TAREAS] Borrar tareas",
            payload:''
        }
        dispatch(action)
    }
    return (
        <>
            <form onSubmit={agregarTarea}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="tarea"
                        placeholder="INGRESE TAREA"
                        value={tarea}
                        onChange={onInputChange}

                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button  type="button" className="btn btn-danger" onClick={()=>eliminarTodo(tarea)}>'🧨'</button>
            </form>
            <hr>
            </hr>
            <ul className="list-group">
                {
                    state.map(item => 
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center"> 
                    <span>{item.tarea}</span>
                  <div>
                     <input type="checkbox" className="form-check-input" 
                   value={item.finalizada}
                   onChange={()=>marcarFinalizada(item)}></input>
                   <button 
                   className="btn btn-danger"
                   onClick={()=>borrarTarea(item)}
                   >'🗑️'</button>
                  </div>
                    </li>)
                }
            </ul>

        </>
    )
}

export default ListaTareas

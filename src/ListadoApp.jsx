import { useState } from "react"
import Agregartarea from "./components/Agregartarea"

const Itemms = ({ nombre, visto }) => {
  return (
    <li className="rojo">{nombre}
      {visto && '😂'}
    </li>
  )
}


const ListadoApp = () => {
{/** 
  const addTask = (a) => {
    setArreglo([...arreglo, { nombre: "nuevo", visto: false }])
  }
    */}

  let listadoSecciones = [ 
    { id:0,  nombre: "INSTATANATENO", visto: true },
    { id:1,  nombre: "USO DE VITE", visto: false },
    { id:2,  nombre: "Compoenentes", visto: false },
    { id:3,  nombre: "REDUX", visto: false },
    { id:4,  nombre: "CUSTOMHOOKS", visto: false },
    { id:5, nombre: "REACT", visto: true }
  ]
  const [arreglo, setArreglo] = useState(listadoSecciones)

  const onAgregarTarea = (val) => {
    let valor=val.trim()
      if(valor<1) return
        const envio = {
        id:arreglo.length,
        nombre:valor,
        visto:false
    
        }
    setArreglo([...arreglo, envio])
 
  }

  return (
    <>
      <h1>Listado de temas del curso</h1>
      {/*
        el padre envia propiedad con setArreglo
      */}
      <Agregartarea agregarTarea={onAgregarTarea}></Agregartarea>
      <h2>asda</h2>
      <ol>
        {arreglo.map(item => <Itemms key={item.id} nombre={item.nombre} visto={item.visto}></Itemms>)}

      </ol>
      <br></br>
      {/*
      <button onClick={() => addTask()}>Agregar Tarea</button>
        */}
      </>
  )
}

export default ListadoApp

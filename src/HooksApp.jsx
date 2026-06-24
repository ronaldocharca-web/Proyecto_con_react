import CalculosPesados from "./components/CalculosPesados"
import CallBackComponent from "./components/CallBackComponent"
import ContadorComponent from "./components/ContadorComponent"
import FormularioComponent from "./components/FormularioComponent"
import ListaTareas from "./components/ListaTareas"
import UserList from "./components/UserList"
import UsuariosComponent from "./components/UsuariosComponent"


const HooksApp = () => {
  return (
    <>
        <h1>HOOKS APP</h1>
        <hr>
        </hr>
        {/*
         <UsuariosComponent></UsuariosComponent>
        <UserList></UserList>
         <ContadorComponent></ContadorComponent>
       <FormularioComponent></FormularioComponent>
          <CalculosPesados></CalculosPesados>
  <CallBackComponent></CallBackComponent>
        */}
        <ListaTareas></ListaTareas>
   </>
  )
}

export default HooksApp

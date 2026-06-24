import React from 'react'
import useFetch from '../hooks/useFech'

const UsuariosComponent = () => {
    const {data , isLoading ,errors}=useFetch('https://jsonplaceholder.typicode.com/users')
    return (
        <>
         <h1>LISTA DE USUARIOS</h1>
        { isLoading ?
         <h1>cargando....</h1>
         : errors ? 
         <p>Ha ocurrido un error {errors}</p>
         :
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user=>(
                
                        <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                    </tr>))}
                   
                </tbody>
            </table>
        }
        </>
    )
}
export default UsuariosComponent

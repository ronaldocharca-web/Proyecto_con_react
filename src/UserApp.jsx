import React from 'react'
import {useState,useEffect} from 'react'

import UserList from './components/UserList'


const UserApp = () => {
    
const [endPoint, setendPoint] = useState("users")
{/*
    useEffect(()=>{
        fetchUsers()
    },[])
    */}
const handlefetch=()=>{
    setendPoint("comments")
}
  return (
    <>
        <h1>LISTA DE USUARIOA</h1>
       <UserList endPoint={endPoint}></UserList>
        <button onClick={(a)=>handlefetch(a)}>CLICK</button>
    </>
  )
}

export default UserApp

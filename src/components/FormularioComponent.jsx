
import { useEffect, useRef, useState } from 'react'
import useForm from '../hooks/useForm'


const FormularioComponent = () => {
    const focusRef = useRef()
    const inicialFroms={
            email:"",
        userName:"",
        password:""
    }

    const {formState,email,userName,password,onInputChange}=useForm(inicialFroms)
    
    
    const onSubmit=(event)=>{
        event.preventDefault()
        console.log(formState)
    }

    useEffect(()=>{
        focusRef.current.focus()

    },[])

    return (
        <form onSubmit={(a)=>onSubmit(a)}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                ref={focusRef}
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(a)=>onInputChange(a)}>
                </input>
            </div>
            <div className="form-group">
                <label htmlFor="userName">Name</label>
                <input type="userName"
                    className="form-control"
                    name="userName"
                    placeholder="Enter nanme"
                    value={userName}
                    onChange={(a)=>onInputChange(a)}>
                        
                </input>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(a)=>onInputChange(a)}>
                </input>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default FormularioComponent

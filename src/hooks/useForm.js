import React from 'react'
import { useState } from 'react'


const useForm = (inicialFroms={}) => {
    const [formState, setFormState] = useState(inicialFroms)
    
    
    const onInputChange=({target})=>{
        const {name,value}=target

        setFormState({...formState,[name]:value})
    }

    return {
    formState,
    ...formState,
    onInputChange
    }
}

export default useForm

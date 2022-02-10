import { useState } from "react";
import React from 'react'
import s from './All.module.css'


export default function All() {
    const [todo, setTodo] = useState({
        input:"",
        completed:false
    });    
    
    const handleInputChange = function(e) {
        setTodo({
        ...todo,
        [e.target.name]: e.target.value
        })
    }

    return (
        <form className='form'>
            <input type='text' onChange={(e) => handleInputChange(e)} value={todo.input}
             placeholder='Add details' name='input' className={s.input}></input>
            <button type='submit' className={s.btn}>Add</button>
        </form>
    )
}

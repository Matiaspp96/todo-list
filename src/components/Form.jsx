import { useState } from "react";
import React from 'react'
import s from './Form.module.css'

export default function Form(props) {
    const [input, setInput] = useState('');

    const handleInputChange = function(e) {
        setInput({
        ...input,
        [e.target.name]: e.target.value
        })
    }

    const handleSubmit = function(e) {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()*100),
            text: input
        })
        setInput('')
    } 

    return (
        <div>
            <form className='form'>
                <input type='text' onChange={(e) => handleInputChange(e)}
                placeholder='Add details' name='input' className={s.input}></input>
                <button type='submit' onClick={handleSubmit} className={s.btn}>Add</button>
            </form>
        </div>
        
    )
}

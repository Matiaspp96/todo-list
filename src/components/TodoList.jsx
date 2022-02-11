import React, {useState} from 'react'
import Form from './Form'

export default function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = e =>{
        if (!e.text) {
            return
        }

        const newToDos = [e, ...todos];
        setTodos(newToDos)
    }

    return (
        <div>
            <Form onSubmit={addTodo}/>
        </div>
     )
}

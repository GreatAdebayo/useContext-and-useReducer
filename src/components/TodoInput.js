import React, { useContext } from 'react'
import AppContext from '../context/app-context'
import { useRef } from 'react'

const TodoInput = () => {
    const newtodo = useRef();
    const {addTodo} = useContext(AppContext)
    return (
        <div>
            <input type='text' ref={newtodo}/>
            <button onClick={()=>addTodo({id:Math.random(), text:newtodo.current.value, completed:false})}>Add</button>
        </div>
    )
}

export default TodoInput

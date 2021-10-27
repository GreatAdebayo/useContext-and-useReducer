import React, { Fragment } from 'react'
import appContext from '../context/app-context'
import { useContext } from 'react'

const TodoList = () => {
    const { todos, toggleTodo, deleteTodo } = useContext(appContext)
    return (
        <div>
            {todos.length ? todos.map((item, index) => {
                return (
                    <Fragment key={index}>
                        <p>{item.text}</p>
                        <button style={{ backgroundColor: 'blue' }} onClick={() => toggleTodo(item.id)}>Toggle</button>
                        <button style={{ backgroundColor: 'red' }} onClick={() => deleteTodo(item.id)}>Delete</button>
                        <p><strong>{item.completed ? 'Done' : 'NotDone'}</strong></p>
                    </Fragment>
                )
            }) : ''}
        </div>
    )
}

export default TodoList

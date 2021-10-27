import React, { useReducer } from 'react'
import AppContext from './app-context'
import appReducer from './app-reducer'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './app-actions'
//all application states
const AppState = (props) => {
    const initialState = {
        todos: [] //{id:123, text: 'ddd', complete:false}
    }
    const [state, dispatch] = useReducer(appReducer, initialState)

    //Add todo
    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
    }

    //Toggle Todo
    const toggleTodo = (todoId) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: todoId
        })
    }

    //Delete Todo
    const deleteTodo = (todoId) => {
        dispatch({
            type: DELETE_TODO,
            payload: todoId
        })
    }
    return (
        <AppContext.Provider value={{
            todos: state.todos,
            addTodo, 
            toggleTodo,
            deleteTodo
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState

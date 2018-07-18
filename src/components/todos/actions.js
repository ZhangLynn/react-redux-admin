import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js';
import {createAction} from 'redux-actions'
let nextTodoId = 0;

export const addTodo = createAction(ADD_TODO,text=>({
    completed: false,
    id: nextTodoId ++,
    text: text
}))

export const toggleTodo = createAction(TOGGLE_TODO,id=>({id}))

export const removeTodo=createAction(REMOVE_TODO,id=>({id}))



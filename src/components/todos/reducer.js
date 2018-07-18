import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO}from './actionTypes.js';
import {handleActions} from 'redux-actions';

export default handleActions({
    [ADD_TODO] :(state=[], action) => {
        return [
            ...state,
            action.payload
        ]
    },
    [TOGGLE_TODO] :(state=[], action) => {
        return state.map(todoItem=>{
            if(action.payload.id===todoItem.id){
                return {...todoItem, completed: !todoItem.completed};
            }else{
                return todoItem
            }
        })
    },
    [REMOVE_TODO] :(state=[], action) => {
        return state.filter(todoItem=>(todoItem.id!==action.payload.id))
    }
},[]);

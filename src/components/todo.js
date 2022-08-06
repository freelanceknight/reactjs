import React, { useState } from "react";
import TodoForm from "./todoForm";
import {RiCloseCircleLine, RiCheckFill} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";
export default function Todo({todos,completeTodos,removeTodo, updateTodo}) {
    const [edit,setEdit] = useState({
        id:null,
        text:''
    })

    const submitUpdate = value => {
        updateTodo(edit.id,value);
        setEdit({id: null, value:''});
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
    return todos.map((todo,index)=>(
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={()=>completeTodos(todo.id)}>{todo.text}</div>
            <div className="icons">
                <RiCheckFill onClick={()=>completeTodos(todo.id)} className="delete-icon"/>
                <RiCloseCircleLine onClick={()=>removeTodo(todo.id)} className="delete-icon"/>
                <TiEdit onClick={()=>setEdit({id: todo.id, value:todo.text})} className="edit-icon"/>

            </div>
        </div>
    ))
}
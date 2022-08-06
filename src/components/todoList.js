import React, { useState } from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";
export default function TodoList(){
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) =>{
        if(!todo.text){
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        // console.log(todo, ...todos);

    }
    const updateTodo = (todoId,newValue) => {
        if(!newValue.text){
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
    const completeTodos = id =>{

        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
        console.log(id);
    }
    const removeTodo = id => {
        const removedArray = [...todos].filter(todo => todo.id !== id);
        setTodos(removedArray);
    }
    return(
        <div>
            <h1 className="text-center">What To Do Today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo
                todos={todos}
                completeTodos = {completeTodos}
                removeTodo={removeTodo}
                updateTodo = {updateTodo}
            />
        </div>
    );
}
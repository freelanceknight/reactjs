import React, { useState ,useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button';

export default function TodoForm(props){

    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    // const inputRef = useRef(null);
    // useEffect(()=>{
    //     inputRef.current.focus();
    // })
    const inputChange = (e) => {
        //console.log("Input Changed");
        setInput(e.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        })
        setInput('');
    }
        return(
                <form className="todo-form text-center" onSubmit={handleSubmit}>

                    {props.edit ? (
                        <>
                            <input onChange={inputChange} type="text" value={input} placeholder="Edit a Todo" name="todo-item" className="todo-input"/>
                            <button className="btn btn-warning btn-large todo-btn">Update</button>
                        </>
                    ) : (
                        <>
                            <input onChange={inputChange} type="text" value={input} placeholder="Add a Todo" name="todo-item" className="todo-input"/>
                            <button className="btn btn-warning btn-large todo-btn">Add</button>
                        </>
                    )}


                </form>




        );
}
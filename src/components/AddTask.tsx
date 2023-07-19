import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { ITask } from "./Interfaces";

export const AddTask = () => {
    const [task, setTask] = useState<string>("")
    const [deadline, setDeadline] = useState<number>(0)
    const [todoList, setTodoList] = useState<ITask[]>([])
    const InputRef = useRef();

    const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
        setTask(e.target.value)
        if(e.target.name==="task"){
            setTask(e.target.value)
        }else {
            setDeadline(Number(e.target.value))
        }
    }

    const handleSubmit = ():void => {
        const todos = {}
        setTodoList([...todoList,{taskName:task, deadline:deadline}])
        setTask("");
        setDeadline(0)
    }

    useEffect(()=>{
        console.log(todoList)
    },[handleSubmit])

    return (
        <>
            <div>
                <input type="text" placeholder="add task" onChange={handleChange} value={task} name="task"/>
                <input type="number" placeholder="deadline" onChange={handleChange} value={deadline} />
                <button onClick={handleSubmit}>Add Task</button>
            </div>
        </>
    )
}
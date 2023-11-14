import { useState } from "react"
import "./App.css"
import {Task} from "./Task.js"

export default function App(){

  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask(e){
    e.preventDefault()

    setTasks(currentTasks => {
      return [...currentTasks, {text: newTask}]
    })

    setNewTask("");
  }

  return (
    <>

    {/* TOP CENTER CONTAINER */}
    <div className="topContainer">
      <h1 className="title">News</h1>
      
      <form className="form">
        <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)}></input>
        <button className="btn" onClick={addTask}>Add</button>
      </form>
    </div>
      
    {/* LIST LEFT */}
    <div className="listdiv">
      <ul className="list">
        {tasks.map(task => {
          return <Task text={task.text}></Task>
        })}
      </ul>
    </div>

    {/* LIST RIGHT */}
    <div className="listdiv">
      <ul className="list">
        {tasks.map(task => {
          return <Task text={task.text}></Task>
        })}
      </ul>
    </div>

    </>
  )
}
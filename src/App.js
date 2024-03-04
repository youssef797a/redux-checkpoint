import { useState } from "react";


function app() {
  const [tasks, setTasks] = useState([
    {id: Math.random(), description:"redux", isDone: false},
    {id: Math.random(), description:"Lunch", isDone: false},
  ])
  return (
    <div className="App">
      <h1>todo list with redux</h1>
      <Addtask/>
      <ListTask tasks={tasks}/>
    </div>
  );
}
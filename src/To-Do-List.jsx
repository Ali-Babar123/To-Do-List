import React, {useState} from "react";

function MyComponent(){
            const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk a dog"]);
            const [newTasks, setNewTasks] = useState("");

            function handleInputChange(event){
                setNewTasks(event.target.value);

            }

            function handleAddTask(){
                if(newTasks.trim() !== ""){
                setTasks(t => [...t, newTasks]);
                setNewTasks("");
                }

            }
                
            function handleDeleteTask(index){
                setTasks(tasks.filter((_, i) => i !== index));

            }
            function handleMoveUp(index){
                  if(index > 0){
                    const updatedtTasks = [...tasks];
                   [updatedtTasks[index],updatedtTasks[index - 1]] = 
                   [updatedtTasks[index - 1],updatedtTasks[index]];
                   setTasks(updatedtTasks);
                  }
                  
            }
            function handleMoveDown(index){
                if(index < tasks.length - 1){
                    const updatedtTasks = [...tasks];
                   [updatedtTasks[index],updatedtTasks[index  + 1]] = 
                   [updatedtTasks[index + 1],updatedtTasks[index]];
                   setTasks(updatedtTasks);
                  }

            }

            return(
                <div className="to-do-list">
                    <h1>To-Do-Lists</h1>
                    <div>
                        <input type="text" value={newTasks} onChange={handleInputChange} placeholder="Enter a task..."/>
                        <button className="add-button" onClick={handleAddTask}>Add</button>
                    </div>
                    <ol>
                    {tasks.map((tasks, index) => 
                    <li key={index} >
                        <span className="text">{tasks}</span>
                        <button className="delete-button" onClick={() => handleDeleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => handleMoveUp(index)}>Up</button>
                        <button className="move-button" onClick={() => handleMoveDown(index)}>Down</button>
                    </li>)
                        }</ol>
                </div>
            );
}
export default MyComponent;
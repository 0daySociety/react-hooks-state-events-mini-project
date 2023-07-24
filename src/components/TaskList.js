import React from "react";
import Task from "./Task";

function TaskList({taskData}) {
  console.log(taskData);
  return (
    <div className="tasks">
      {

        taskData.map((item, index)=>{
          return(
            <Task key={index} index ={index} text ={item.text} category={item.category}
              />
          )
          
              })

      }
    </div>
  );
}

export default TaskList;

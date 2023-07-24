import React from "react";

function Task({text,category,index}) {



  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={(e)=>
     {
      e.preventDefault()
    
    }
        }>X</button>
    </div>
  );
}

export default Task;

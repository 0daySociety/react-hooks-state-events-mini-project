import React from "react";
import { useState } from "react";


function NewTaskForm({categories}) {

  const [details,setDetails]=useState("")
  const [category, setCategory]=useState("")
  const [submittedData ,setSubmittedData] =useState([])

  function handleFirstName(event){
     
  }
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {
            categories.map((item,index)=>{
              return(
                <option key={index} >{item.category}</option>
              )
            })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

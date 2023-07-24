import React from "react";

import { useState, useEffect } from "react";

function CategoryFilter({btnCategory}) {
  const [appClass , setAppClass] =useState(null);


  function handleClick(index){
   setAppClass(index)
    console.log(appClass)
  }







  // function handleClass(e){
  //   e.preventDefault()
  // }



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {btnCategory.map((element,index)=>{
        return(
       
          <button  className={appClass===index?"selected":""} onClick={(e)=>{
            handleClick(index)
          }} key={index}>{element.category}</button>
       
        )
      })}
    </div>
  );
}

export default CategoryFilter;

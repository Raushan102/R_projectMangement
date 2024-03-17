import React from "react";
import { useState } from "react";





function NewTask({Add}) {


    const [interTaskName,setInterTaskName]=useState();
    function TaskInterDataHandler(event)
    {
        setInterTaskName(event.target.value)
    }
    
    function addTaskHandler()
    {
         Add(interTaskName)
        setInterTaskName('')

        
    }

  return (
    <div className="flex items-center ">
      <input
        type="text"
        className="border-2 rounded-md mr-3  px-2 py-1 text-center"
        onChange={TaskInterDataHandler}
        value={interTaskName}
      />
      <p>
        <button className="mx-2 text-[0.9rem] shadow-md py-2 px-4 rounded-md hover:bg-stone-200" onClick={addTaskHandler}>
          Add Task
        </button>
      </p>
    </div>
  );
}

export default NewTask;

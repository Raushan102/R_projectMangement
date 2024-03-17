import React from "react";
import Model from './Model'
import { useRef,useState } from "react";

function NewTask({ Add }) {


  let model=useRef()

  const [interTaskName, setInterTaskName] = useState();
  function TaskInterDataHandler(event) {

    if(event.target.value==='')
    {
        model.current.Open()
    }
    else{
      setInterTaskName(event.target.value);
    }
   
  }

  function addTaskHandler() {
    Add(interTaskName);
    setInterTaskName("");
  }

  return (
    <>
       <Model ref={model}>
       <h2 className=" border-l text-stone-900 text-xl my-1 font-black">
          Invalid input
        </h2>
        <p className="text-stone-600 my-1">
          Oops...looks like you forgot to enter name of your task.
        </p>
        <p className="text-stone-600 my-1">
          please make sure you provide a valid value for task name
        </p>
       </Model>
      <div className="flex items-center ">
        <input
          type="text"
          className="border-2 rounded-md mr-3  px-2 py-1 text-center"
          onChange={TaskInterDataHandler}
          value={interTaskName}
        />
        <p>
          <button
            className="mx-2 text-[0.9rem] shadow-md py-2 px-4 rounded-md hover:bg-stone-200"
            onClick={addTaskHandler}
          >
            Add Task
          </button>
        </p>
      </div>
    </>
  );
}

export default NewTask;

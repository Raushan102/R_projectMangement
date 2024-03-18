import React from "react";
import NewTask from "./NewTask";

function Task({ onDelete, onAdd, task }) {
  return (
    <div className="my-6">
      <h2 className="my-4 text-xl">Task</h2>
    
      <NewTask Add={onAdd} />

      {task.length === 0 && (
        <p className="my-3 text-xs ">Task is not add yet</p>
      )}

      {
        task.length>0 && <ul>
        {task.map((item) => 
           (
            <li key={item.id} className="w-full my-3 mr-2 ms:mr-0 py-5 px-2 rounded-md flex items-center justify-between bg-slate-200 ">
              <p className="font-bold text-xl p-1 ">{item.Text}</p>
              <button className="mx-2 text-[0.9rem] shadow-md py-2 px-4 rounded-md hover:bg-stone-200" onClick={()=>onDelete(item.id)}>
                clear
              </button>
            </li>
          ))}
        
      </ul>
      }

  
    </div>
  );
}

export default Task;

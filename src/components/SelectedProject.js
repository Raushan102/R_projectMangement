import React from "react";
import { useRef} from "react";
import Task from "./Task";
import Model from "./Model";

function SelectedProject({
  Data,
  DeleteProject,
  onDeleteTask,
  onAddTask,
  task,
}) {
  let model = useRef();

  let FormatedDate = new Date(Data.date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });




  return (
    <>
      <Model ref={model} Title="Okay">
        <h2 className=" border-l text-stone-900 text-xl my-1 font-black">
          Invalid input
        </h2>
        <p className="text-stone-600 my-1">
          Oops...looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 my-1">
          please make sure you provide a valid value for task name{" "}
        </p>
      </Model>
      <div className="w-[40rem]  flex-col mx-2 my-5 ">
        <div className="flex items-center justify-between ">
          <h1 className="text-stone-900 font-extrabold text-1xl">
            {Data.Title}
          </h1>
          <button
            className="mx-2 text-[0.9rem] shadow-md py-2 px-4 rounded-md hover:bg-stone-200"
            onClick={() => DeleteProject(Data.id)}
          >
            Delete
          </button>
        </div>
        <p className="text-stone-900/90 text-xs my-2 ">{FormatedDate}</p>
        <p className="py-6 border-b-2 border-stone-950 whitespace-pre-wrap">
          {Data.Description}
        </p>
       



        <Task onAdd={onAddTask} onDelete={onDeleteTask} task={task.filter(val=>val.projectId===Data.id)} />
      </div>
    </>
  );
}

export default SelectedProject;

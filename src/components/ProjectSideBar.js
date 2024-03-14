import React from "react";
import Button from "./Button";

function ProjectSideBar({changeProjectHandler,addProject}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-slate-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <div>
         <Button content=' + Add Project' onClick={changeProjectHandler}/>
      </div>
      <ul>{addProject.map(value=><li key={value.id} className="my-1 text-left w-full"><button className=" first-letter:uppercase text-left rounded-md text-stone-400 hover:text-stone-200 hover:bg-stone-600 ">{value.Title}</button></li>)}</ul>
    </aside>
  );
}

export default ProjectSideBar;

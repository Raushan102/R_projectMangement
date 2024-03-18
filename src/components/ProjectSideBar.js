import React from "react";
import Button from "./Button";

function ProjectSideBar({ changeProjectHandler, addProject, sideBarProject,SelectedId }) {

   
 console.log("selected project is ",SelectedId);

 
   let  selectedCss='first-letter:uppercase text-left rounded-md text-stone-200 bg-stone-600 py-1 px-1  w-full';

  
      let buttonCss='first-letter:uppercase text-left rounded-md text-stone-400 hover:text-stone-200 hover:bg-stone-600 py-1 px-1  w-full';

  


 


  return (
    <aside className="w-1/3  px-1 py-2 sm:px-8 sm:py-16 bg-slate-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <div>
        <Button content=" + Add Project" onClick={changeProjectHandler} />
      </div>
      <ul>
        {addProject.map((value) => (
          <li key={value.id} className="my-2 text-left w-full">
            <button
              className={value.id===SelectedId ? selectedCss : buttonCss}
              onClick={() => sideBarProject(value.id)}
              
            >
              {value.Title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default ProjectSideBar;

import ProjectSideBar from "./components/ProjectSideBar";
import "./App.css";
import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [project_display_State, set_project_display_State] = useState({
    project_display_StateShowId: undefined,
    projects: [],
  });

  //cancel button handler function name(params) {

  function cancelButtonHandler() {
    set_project_display_State((prevState) => {
      return {
        ...prevState,
        project_display_StateShowId: undefined,
      };
    });
  }

  function changeProject() {
    set_project_display_State((prevState) => {
      return {
        ...prevState,
        project_display_StateShowId: null,
      };
    });
  }

  //============================side bar project handler =====================>
  function sideBarProjectHandler(id) {
    set_project_display_State((prevState) => {
      return {
        ...prevState,
        project_display_StateShowId: id,
      };
    });
    let selectedProject = project_display_State.projects.find(
      (val) => val.id === id
    );

   
     
   
  }

  //here we handle all userData to display his save project and other
  function NewProjectData(userData) {
    let newProject = {
      ...userData,
      id: Math.random(),
    };
    set_project_display_State((prevState) => {
      return {
        ...prevState, // here i collect all previous user data  if i not collect the data then we have only last inter data to prevent to lost old data we  first of all i collect previous data then  inter next data
        project_display_StateShowId: undefined, // here we change the display state because we have remove form once user save after inter all data
        projects: [...prevState.projects, newProject],
      };
    });
  }
 

  let content;

  if (project_display_State.project_display_StateShowId === undefined) {
    content = <NoProjectSelected changeProjectHandler={changeProject} />;
  } else if (project_display_State.project_display_StateShowId === null) {
    content = <NewProject Add={NewProjectData} cancel={cancelButtonHandler} />;
  }
  else
  {
    let selectedProject = project_display_State.projects.find(
      (val) => val.id === project_display_State.project_display_StateShowId
    );

    
     content= <SelectedProject Data={selectedProject}/>

  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        changeProjectHandler={changeProject}
        addProject={project_display_State.projects}
        sideBarProject={sideBarProjectHandler}
      />
      {content}
    </main>
  );
}

export default App;

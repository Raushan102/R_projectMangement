import ProjectSideBar from "./components/ProjectSideBar";
import "./App.css";
import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
function App() {
  const [project_display_State, set_project_display_State] = useState({
    project_display_StateShowId: undefined,
    projects: [],
  });

  function changeProject() {
    set_project_display_State((prevState) => {
      return {
        ...prevState,
        project_display_StateShowId: null,
      };
    });
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
  console.log(project_display_State);

  let content;

  if (project_display_State.project_display_StateShowId === undefined) {
    content = <NoProjectSelected changeProjectHandler={changeProject} />;
  } else if (project_display_State.project_display_StateShowId === null) {
    content = <NewProject Add={NewProjectData} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar changeProjectHandler={changeProject} addProject={project_display_State.projects}  />
      {content}
    </main>
  );
}

export default App;

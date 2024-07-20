import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  let content;

  function handleAddNewProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  function handleCancelProject() {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected addProject={handleAddNewProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        cancelProject={handleCancelProject}
      />
    );
  }

  console.log(projectsState);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        addProject={handleAddNewProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;

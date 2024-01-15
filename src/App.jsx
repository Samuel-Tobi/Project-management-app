import { useState } from "react";
import "./App.css";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import Sibar from "./components/Sibar.jsx";

function App() {
  // const [showNewProject, setShowNewProject] = useState(false);

  // const handleCreateNewProject = () => {
  //   setShowNewProject(true);
  // };

  // const handleAddProject = () => {
  //   setShowNewProject(true);
  // };

  // const handleCancelNewProject = () => {
  //  dueDate: enteredDueDateDate: enteredDueDateShowNewProject(false);
  // };

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: projectId,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectsState);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sibar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;

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
  //   setShowNewProject(false);
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

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sibar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;

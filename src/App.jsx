import "./App.css";
import NewProject from "./components/NewProject.jsx";
import Sibar from "./components/Sibar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sibar />
      <NewProject />
    </main>
  );
}

export default App;

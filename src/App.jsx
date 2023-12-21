import "./App.css";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import Sibar from "./components/Sibar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sibar />
      {/* <NewProject /> */}
      <NoProjectSelected />
    </main>
  );
}

export default App;

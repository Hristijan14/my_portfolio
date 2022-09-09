import "./App.css";
import Introduction from "./components/introduction/Introduction";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Introduction />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

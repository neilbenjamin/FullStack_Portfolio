import "./App.css";
//Components
import FetchComponent from "./01_Components/FetchComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>INPUT NAME TO PREDICT NATIONALITY</h3>
        <FetchComponent />
        {/* Added this line back for the test to pass. Solution courtesy of Hyperion Dev. */}
      </header>
    </div>
  );
}

export default App;

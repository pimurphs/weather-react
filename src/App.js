import "./App.css";
import Weather from "./Weather";
import Loader from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;

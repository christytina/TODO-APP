import "./App.css";
import Todo from "./components/Todo";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Todo />
      </ThemeProvider>
    </div>
  );
}

export default App;

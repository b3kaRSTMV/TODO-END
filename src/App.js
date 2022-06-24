
import './App.css';
import {Header} from "./components/header/Header";
import{Createtodo} from "./components/createtodo/Createtodo";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className = "todo_body">
        <Createtodo/>
      </div>
      <div class = "block">
      </div>
    </div>
  );
}

export default App;


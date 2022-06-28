
import './App.css';
import { Header } from "./components/header/Header";
import { Createtodo } from "./components/createtodo/Createtodo";
import { Todo } from './components/todo/Todo';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="todo_body">
        <Createtodo />
        <div className="todo_items">
          <Todo year ="20" text="Aman" />
          <Todo  year ="22" text="Aziz" />
          <Todo checked={true} year = "25" text="Azamat" />
          <Todo />
          <Todo />
      
        </div>
      </div>
    </div>
  );
}

export default App;


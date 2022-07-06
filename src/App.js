
import { useEffect, useState } from 'react';
import './App.css';
import { Header } from "./components/header/Header";
import { Createtodo } from "./components/createtodo/Createtodo";
import { Todo } from './components/todo/Todo';





function App() {
  const todoArr = JSON.parse(localStorage.getItem('todo')) || []
  const [state, setState] = useState(todoArr);
  useEffect(()=>{
    console.log('Hello from useEffect')
    localStorage.setItem("todo",JSON.stringify(state))
  }, [state]);
  const addNewTodo = (str) => {
    setState([...state, { text: str, status: false, id: Date.now() }])
  }


  const deleteTodo = (id) => {
    const newArr = state.filter((item) => item.id !== id);
    setState(newArr);
  }




  const onCheck = (id) =>{
    const newArr = state.map((item)=>{
      if(item.id ===id){
        item.status = !item.status
      }
        return item
    })
    setState(newArr)
  }

const onEditText = (newText,id) =>{
  const newArr = state.map((todo) =>{

if (todo.id === id){
  return {...todo, text:newText}
  // todo.text=newText
}
    return todo   
  })
  setState(newArr)
}




  return (
    <div className="App">
      <Header state={state} />
      <div className="todo_body">
        <Createtodo addNew={addNewTodo} />
        <div className="todo_items">
          {
            state.map((item) => <Todo
              text={item.text}
              checked={item.status}
              id={item.id}
              onDelete={deleteTodo}
              onCheck={onCheck}
              onEditText={onEditText}
            />)
          }
        </div>
      </div>

    </div>
  );
}
export default App;


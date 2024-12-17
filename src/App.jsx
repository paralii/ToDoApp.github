import {useState} from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, {text, completed:false, isEditing:false}]);
  };

  const toggleToDo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, taskIndex) => taskIndex !==index);
    setTodos(newTodos);
  };

  const toggleEditmode = (index) => {
    const editTodos = [...todos];
    editTodos[index].isEditing = !editTodos[index].isEditing;
    setTodos(editTodos);
  };

  const updateTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    newTodos[index].isEditing = false;
    setTodos(newTodos);
  };

  return(
    <div className="app">
      <h1>ToDo App</h1>
      <TodoForm addTodo = {addTodo}/>
      <TodoList 
      todos = {todos} 
      toggleTodo = {toggleToDo} 
      deleteTodo = {deleteTodo} 
      toggleEditmode = {toggleEditmode}
      updateTodo = {updateTodo}/>
    </div>
  );
};

export default App;
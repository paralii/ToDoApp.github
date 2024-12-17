/* eslint-disable react/prop-types */
import "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo, toggleEditmode, updateTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleTodo={() => toggleTodo(index)}
          deleteTodo={() => deleteTodo(index)}
          toggleEditmode={() => toggleEditmode(index)}
          updateTodo={(index, newText) => updateTodo(index, newText)}
          index={index}
        />
      ))}
    </div>
  );
}

export default TodoList;

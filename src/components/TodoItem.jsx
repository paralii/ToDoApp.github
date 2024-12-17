/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

 
function TodoItem({ todo, toggleTodo, deleteTodo, toggleEditmode, updateTodo, index }) {
   
  const [editText, setEditText] = useState(todo.text);

  useEffect(() => { 
    setEditText(todo.text);
   
  }, [todo.text]);

  // Handle updating the todo text
  const handleUpdate = () => {
    if (editText.trim() === "") {
      alert("Task cannot be empty.");
      setEditText(todo.text); // Revert to original text if empty
      toggleEditmode(index); // Exit edit mode
      return;
    }
    updateTodo(index, editText); // Call parent function to update the task
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {todo.isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleUpdate} // Trigger update when losing focus
          onKeyDown={(e) => e.key === "Enter" && handleUpdate()} // Trigger update on Enter key press
          autoFocus
        />
      ) : (
        <>
          <span onClick={toggleTodo} className="todo-text">
          <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '8px' }} />
            {todo.text}
          </span>
          <button onClick={() => toggleEditmode(index)} className="edit-button">
          <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={() => deleteTodo(index)} className="delete-button">
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;

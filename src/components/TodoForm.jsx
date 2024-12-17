import  {useState} from "react";


// eslint-disable-next-line react/prop-types
function TodoForm({addTodo}) {

    console.log(addTodo);

    const [text, setText] = useState("");

    const handleSubmit = (submit) => {
        submit.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText("");
        }
    };

    return (
        < form onSubmit={handleSubmit} className="todo-form">
        <input type="text" 
        placeholder="Add a new task..."
        value={text}
        onChange={(change)=> setText(change.target.value)}
        className="todo-input"/>

        <button type="submit" className="add-button">Add</button>
        </form>
    );
}

export default TodoForm;
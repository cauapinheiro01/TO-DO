const Todo = ({ todo, removeTodo, toggleComplete }) => {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button 
          className="complete" 
          onClick={() => toggleComplete(todo.id)} // Toggle completion
        >
          {todo.isCompleted ? "Unmark" : "Complete"}
        </button>
        <button 
          className="remove" 
          onClick={() => removeTodo(todo.id)} // Remove task
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Todo;

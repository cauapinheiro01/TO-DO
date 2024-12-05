import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState(""); // Value of the task
  const [category, setCategory] = useState(""); // Category of the task

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) {
      alert("Please provide both a title and a category for the task.");
      return;
    }
    addTodo(value, category);
    setValue(""); // Clear the input after adding
    setCategory(""); // Clear the input after adding
  };

  return (
    <div className="todo-form">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the title"
          value={value}
          onChange={(e) => setValue(e.target.value)} // Update task title
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)} // Update category
        >
          <option value="">Select a category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Studies">Studies</option>
        </select>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TodoForm;

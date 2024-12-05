import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Needs to be done",
      category: "Work",
      isCompleted: false,
    },
  ]);

  // Function to add a new task
  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000), // Generate a unique ID
        text,
        category,
        isCompleted: false, // Initially, the task is not completed
      }
    ];
    setTodos(newTodos);
  };

  // Function to remove a task
  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // Function to toggle the completion status of a task
  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Task List</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo 
            key={todo.id} 
            todo={todo} 
            removeTodo={removeTodo} 
            toggleComplete={toggleComplete} 
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;

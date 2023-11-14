import { useEffect, useState } from 'react'
import './App.css'
import TodoList from '../components/TodoList'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([]);

  // const todos = [
  //   { name: 'Todo', status: 'In Progress', dueDate: '2023/11/13' },
  //   { name: 'Todo 2', status: 'In Progress', dueDate: '2023/11/13' },
  //   { name: 'Todo 3', status: 'In Progress', dueDate: '2023/11/13' },

  //   { name: 'Todo', status: 'On Hold', dueDate: '2023/11/13' },
  //   { name: 'Todo 2', status: 'On Hold', dueDate: '2023/11/13' },
  //   { name: 'Todo 3', status: 'On Hold', dueDate: '2023/11/13' },
  //   { name: 'Todo 4', status: 'On Hold', dueDate: '2023/11/13' },

  //   { name: 'Todo', status: 'Completed', dueDate: '2023/11/13' },
  //   { name: 'Todo 2', status: 'Completed', dueDate: '2023/11/13' },
  //   { name: 'Todo 3', status: 'Completed', dueDate: '2023/11/13' },
  // ];

  async function fetchTodos() {
    console.log('fetching todos...');
    
    axios
      .get('http://localhost:3000/todos')
      .then((response) => {
        setTodos(response.data.todos);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => { fetchTodos(); }, []);

  const todosInProgress = todos.filter((todo) => { return todo.status == 'In Progress' })
  const todosOnHold = todos.filter((todo) => { return todo.status == 'On Hold' })
  const todosCompleted = todos.filter((todo) => { return todo.status == 'Completed' })

  return (
    <>
      <h1>Todo App</h1>
      <input type="button" value="Teste" onClick={fetchTodos} />
      <div className="todo-list-container">
        <TodoList todos={todosOnHold} status='On Hold'></TodoList>
        <TodoList todos={todosInProgress} status='In Progress'></TodoList>
        <TodoList todos={todosCompleted} status='Completed'></TodoList>
      </div>
    </>
  )
}

export default App

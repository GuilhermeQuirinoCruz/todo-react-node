import { useEffect, useState, useRef } from 'react'
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

  const [newTodo, setNewTodo] = useState(false);

  function showNewTodo() {
    setNewTodo(true);
  }

  function hideNewTodo() {
    setNewTodo(false);
  }

  const todoNameRef = useRef('');
  const todoDueDateRef = useRef('');

  async function createNewTodo() {
    console.log('creating new todo...');

    console.log(todoNameRef.current.value);
    console.log(todoDueDateRef.current.value);
    
    axios
      .post('http://localhost:3000/todos', {
        name: todoNameRef.current.value,
        dueDate: todoDueDateRef.current.value
      })
      .then((response) => {
        console.log('new todo created successfully');

        todoNameRef.current.value = ''

        fetchTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <h1>Todo App</h1>

      {newTodo ? (
        <div className={'new-todo'}>
          <input type='button' value='X' onClick={hideNewTodo}/>

          <div>
            <p>
              Name: <input type='text' name='todoName' id='todoName' ref={todoNameRef} />
            </p>
          </div>

          <div>
            <p>
              Due Date: <input type='date' name='todoDueDate' id='todoDueDate' ref={todoDueDateRef} />
            </p>
          </div>

          <input type='button' value='Create' onClick={createNewTodo}/>
        </div>
      ) : (
        <input type='button' value='NEW +' onClick={showNewTodo} className='btn-show-new-todo'/>
      )}

      <div className='todo-list-container'>
        <TodoList todos={todosOnHold} status='On Hold'></TodoList>
        <TodoList todos={todosInProgress} status='In Progress'></TodoList>
        <TodoList todos={todosCompleted} status='Completed'></TodoList>
      </div>
    </>
  )
}

export default App

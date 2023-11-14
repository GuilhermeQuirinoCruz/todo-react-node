import { useState } from 'react'
import './App.css'
import TodoCard from '../components/TodoCard'
import TodoList from '../components/TodoList'

function App() {
  const allTodos = [
    { name: 'Todo', status: 'In Progress', dueDate: '2023/11/13' },
    { name: 'Todo 2', status: 'In Progress', dueDate: '2023/11/13' },
    { name: 'Todo 3', status: 'In Progress', dueDate: '2023/11/13' },

    { name: 'Todo', status: 'On Hold', dueDate: '2023/11/13' },
    { name: 'Todo 2', status: 'On Hold', dueDate: '2023/11/13' },
    { name: 'Todo 3', status: 'On Hold', dueDate: '2023/11/13' },
    { name: 'Todo 4', status: 'On Hold', dueDate: '2023/11/13' },

    { name: 'Todo', status: 'Completed', dueDate: '2023/11/13' },
    { name: 'Todo 2', status: 'Completed', dueDate: '2023/11/13' },
    { name: 'Todo 3', status: 'Completed', dueDate: '2023/11/13' },
  ];

  const todosInProgress = allTodos.filter((todo) => { return todo.status == 'In Progress' })
  const todosOnHold = allTodos.filter((todo) => { return todo.status == 'On Hold' })
  const todosCompleted = allTodos.filter((todo) => { return todo.status == 'Completed' })

  return (
    <>
      <h1>Todo App</h1>
      <div className="todo-list-container">
        <TodoList todos={todosOnHold} status='On Hold'></TodoList>
        <TodoList todos={todosInProgress} status='In Progress'></TodoList>
        <TodoList todos={todosCompleted} status='Completed'></TodoList>
      </div>
    </>
  )
}

export default App

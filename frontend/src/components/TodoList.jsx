import React from 'react'
import TodoCard from './TodoCard';
import './TodoList.css'

function TodoList({ todos, status }) {
  return (
    <div className='todo-list'>
      <div className="todo-list-status">
        {status}
      </div>
      {todos.map((todo) => {
        return (
          <TodoCard name={todo.name} dueDate={todo.dueDate}></TodoCard>
        );
      })}
    </div>
  )
}

export default TodoList

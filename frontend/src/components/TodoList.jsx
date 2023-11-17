import React from 'react'
import TodoCard from './TodoCard';
import './TodoList.css'

function TodoList({ todos, status }) {
  return (
    <div className='todo-list'>
      <div className="todo-list-status">
        {status}
      </div>
      {todos.length > 0 ? (
          todos.map((todo) => {
          return (
            <TodoCard name={todo.name} dueDate={todo.dueDate} status={todo.status} key={todo}></TodoCard>
          );
        })) : (
          <p className='p-empty'><i>Empty</i></p>
        )}
    </div>
  )
}

export default TodoList

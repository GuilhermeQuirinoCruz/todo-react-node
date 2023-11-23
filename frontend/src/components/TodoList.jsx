import React from 'react'
import TodoCard from './TodoCard';
import './TodoList.css'

function TodoList({ todos, status, buttons, updateTodo }) {
  return (
    <div className='todo-list'>
      <div className="todo-list-status">
        {status}
      </div>
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              id={todo.id}
              name={todo.name}
              dueDate={todo.dueDate}
              status={todo.status}
              buttonLeft={buttons[0]}
              buttonRight={buttons[1]}
              updateTodo={updateTodo}>
            </TodoCard>
          );
        })) : (
        <p className='p-empty'><i>Empty</i></p>
      )}
    </div>
  )
}

export default TodoList

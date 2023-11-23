import React from 'react'
import { useState } from 'react'
import './TodoCard.css'

function TodoCard({ id, name, dueDate, status, buttonLeft, buttonRight, updateTodo }) {

  const [showButtons, setShowButtons] = useState(false);

  function convertStatusToClassName(status) {
    return status.replace(' ', '-').toLowerCase();
  }

  function changeStatus(right) {
    const statuses = ["On Hold", "In Progress", "Completed"];
    const newStatusIndex = statuses.indexOf(status) + (right ? 1 : -1);

    if (newStatusIndex >= 0 && newStatusIndex < statuses.length) {
      const todo = {
        name: name,
        dueDate: dueDate,
        status: statuses[newStatusIndex],
      };

      updateTodo(id, todo);
    }
  }

  return (
    <div
      className={'todo-card ' + convertStatusToClassName(status)}
      onMouseEnter={() => { setShowButtons(true) }}
      onMouseLeave={() => { setShowButtons(false) }}>

      <input
        className={"todo-card-button-" + ((buttonLeft && showButtons) ? "show" : "hide")}
        type="button"
        value="<"
        onClick={() => { changeStatus(false) }} />

      <div className="todo-card-data">
        <h2>{name}</h2>
        <p>{dueDate}</p>
      </div>

      <input
        className={"todo-card-button-" + ((buttonRight && showButtons) ? "show" : "hide")}
        type="button"
        value=">"
        onClick={() => { changeStatus(true) }} />
    </div>
  )
}

export default TodoCard

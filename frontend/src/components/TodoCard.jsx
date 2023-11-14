import React from 'react'
import { useState } from 'react'
import './TodoCard.css'

function TodoCard({ name, dueDate, status }) {

  function convertStatusToClassName(status) {
    return status.replace(' ', '-').toLowerCase();
  }

  return (
    <div className={'todo-card ' + convertStatusToClassName(status)}>
      <h2>{name}</h2>
      <p>{dueDate}</p>
    </div>
  )
}

export default TodoCard

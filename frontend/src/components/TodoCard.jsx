import React from 'react'
import { useState } from 'react'
import './TodoCard.css'

function TodoCard({ name, dueDate }) {

  return (
    <div className='todo-card'>
      <h2>{name}</h2>
      <p>{dueDate}</p>
    </div>
  )
}

export default TodoCard

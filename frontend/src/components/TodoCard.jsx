import React from 'react'
import { useState } from 'react'
import './TodoCard.css'

function TodoCard({name}) {

  return (
    <div className='todo-card'>
      <h2>{name}</h2>
      <button>Clique</button>
    </div>
  )
}

export default TodoCard

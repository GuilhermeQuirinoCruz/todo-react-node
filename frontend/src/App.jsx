import { useState } from 'react'
import './App.css'
import TodoCard from './components/TodoCard'

function App() {
  return (
    <>
      <h1>Todo App</h1>
      <TodoCard name='Algum nome'></TodoCard>
    </>
  )
}

export default App

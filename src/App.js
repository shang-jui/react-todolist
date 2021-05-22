// import logo from './logo.svg'
import './App.scss'
import React, { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Todos from './components/Todos'
import Addtodo from './components/AddTodo'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [editValue, setEditValue] = useState('')

  const defaultTodos = [
    {
      id: uuidv4(),
      title: 'learn React',
      isDone: true,
    },
    {
      id: uuidv4(),
      title: 'Hello Gavin Kuo',
      isDone: false,
    },
    {
      id: uuidv4(),
      title: 'HiHi Yana Lu',
      isDone: false,
    },
  ]
  const [todos, setTodos] = useState(defaultTodos)
  const handleEditValue = (e) => {
    setEditValue(e.target.value)
  }
  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }
  const handleAdd = () => {
    setTodos((preTodos) => {
      return [
        ...preTodos,
        {
          id: uuidv4(),
          title: inputValue,
          isDone: false,
        },
      ]
    })
    setInputValue('')
  }
  console.log(todos)
  localStorage.setItem('todolist', todos)
  const handleAllDelete = () => {
    const newTodosArray = todos.filter((item) => item.isDone !== true)
    setTodos(newTodosArray)
  }
  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  }
  const handleConfirm = (id) => {
    const todoConfirm = todos.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone
      }
      return item
    })
    setTodos(todoConfirm)
  }
  const handleEditInput = (id) => {
    const editInput = todos.map((item) => {
      if (item.id === id) {
        item.title = editValue
      }
      return item
    })
    setTodos(editInput)
    setEditValue('')
  }

  const remaining = todos.filter((todo) => !todo.isDone).length
  return (
    <div className="app">
      <Header handleAllDelete={handleAllDelete} />
      <Addtodo handleAdd={handleAdd} inputValue={inputValue} handleInputValue={handleInputValue} />
      <Todos
        todos={todos}
        handleDelete={handleDelete}
        handleConfirm={handleConfirm}
        handleEditInput={handleEditInput}
        editValue={editValue}
        handleEditValue={handleEditValue}
      />
      <Footer remaining={remaining} />
    </div>
  )
}

export default App

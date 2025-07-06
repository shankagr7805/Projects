import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-500 to-gray-800 p-8">
      <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-12">
        Redux Todo App
      </h1>
      <AddToDo />
      <div className="mt-16">
        <Todo />
      </div>
    </div>
  )
}

export default App

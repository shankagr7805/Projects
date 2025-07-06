import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice'

function Todo() {

    //& useSelector is used to get the list of todos required.

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 mt-10">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-600 inline-block bg-clip-text">
        Your Todos
      </h1>
      <ul className="max-w-2xl mx-auto space-y-4">
        {todos.map((todo) => (
          <li
            className="flex justify-between items-center bg-zinc-900/60 backdrop-blur-md px-6 py-4 rounded-lg shadow-lg hover:scale-[1.02] transform transition duration-200 ease-in-out"
            key={todo.id}
          >
            <div className="text-white text-lg">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="group bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors duration-200"
              title="Delete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo

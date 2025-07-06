import React from 'react'                    //^  useSelector and useDispatch => REACT
import { useDispatch} from 'react-redux'
import { addTodo } from '../features/todoSlice'
import { useState } from 'react'

function AddToDo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()           //^ Dispatch reducer ka use krke store mai value add krta hai.

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form
      onSubmit={addTodoHandler}
      className="max-w-xl mx-auto mt-12 bg-zinc-900/60 backdrop-blur-md p-6 rounded-lg shadow-xl space-y-4"
    >
      <input
        type="text"
        className="w-full bg-zinc-800/70 backdrop-blur-md rounded-md border border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-800 text-base outline-none text-gray-100 py-3 px-4 leading-8 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
        placeholder="What's on your mind?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="w-full text-white bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-md text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-colors duration-200"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddToDo

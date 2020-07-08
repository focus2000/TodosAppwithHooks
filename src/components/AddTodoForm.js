import React, { useState, useContext } from 'react';
import TodosContext from '../context/todos-context';

//CSS file
import addTodosform from '../css/addTodosform.scss';

const AddTodoForm = () => {
  const { dispatch } = useContext(TodosContext)

  const [title, setTitle] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_TODO',
      title
    })
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={addTodo} className="add_todo">
        <input type="text" placeholder="Add Todo" value={title} onChange={(e) => setTitle(e.target.value)} className="add_todo_input" />


        <br />
        <button className="btn">ADD</button>
      </form>
    </div>
  )
}

export default AddTodoForm;
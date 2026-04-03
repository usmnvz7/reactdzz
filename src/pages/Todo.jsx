import React from 'react'
import useTodo from '../hooks/useTodo'
import { Link } from 'react-router-dom'

const Todo = () => {

    const todo = useTodo()


  return (
    <>
        <h1>Страница одной задачи</h1>
        {todo &&
            <div className="todo-item container">
                <h2>{todo.todo}</h2>
                <span>Статус: {todo.completed ? 'Выполнено!' : 'Нужно выполнить!'}</span>
                <Link to={'/todos'} className='back'>Назад</Link>
            </div>
            }
    </>
  )
}

export default Todo
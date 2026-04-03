import React from 'react'
import useTodos from '../hooks/useTodos'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

const Todos = () => {

    const todos = useTodos()
    
  return (
    <>
        <h1>Страница Задачи</h1>
        <div className="todos">
            <div className="todos-box container">
                {todos ? 
                    todos.map(todo => (
                        <div className="todo-item" key={todo.id}>
                            <h2>{todo.todo}</h2>
                            <Link to={`/todos/${todo.id}`}>Перейти к задаче</Link>
                        </div>
                    ))
                :
                <Loader/>
                }
            </div>
        </div>
    </>
  )
}

export default Todos
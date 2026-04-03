import React, { useEffect, useState } from 'react'

const useTodos = () => {
    const [todos, setTodos] = useState(null)

    const getTodos = async () => {
        const url = 'https://dummyjson.com/todos'
        try {
            const res = await fetch(url)
            const data = await res.json()
            setTodos(data.todos)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getTodos()
    }, [])

   return todos
}

export default useTodos
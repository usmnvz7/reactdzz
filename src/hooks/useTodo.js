import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const useTodo = (paramId) => {
    const [todo, setTodo] = useState(null)

    const { id: routeId } = useParams()

    const id = routeId ?? paramId

    const getTodo = async () => {
        const url = `https://dummyjson.com/todos/${id}`

        try {
            const res = await fetch(url)
            const data = await res.json()
            setTodo(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTodo()
    }, [])

  return todo
}

export default useTodo
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const useUser = (paramId) => {
    const [user, setUser] = useState(null)
    const { id: routeId} = useParams()

    const id = routeId ?? paramId

    const getUser = async() => {
        try {
            let res = await fetch(`https://dummyjson.com/users/${id}`)
            let data = await res.json()
            setUser(data)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getUser()
    }, [id])


  return user
}

export default useUser
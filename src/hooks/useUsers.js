import React from 'react'
import { useState, useEffect } from 'react'

const useUsers = () => {

    const [users, setUsers] = useState(null)
        
        const getUsers = async () => {
            let url = 'https://dummyjson.com/users' 
            try {
                let res = await fetch(url)
                let data = await res.json()
                setUsers(data.users)
            } catch (error) {
                console.log(error);
            }
        }
        
        useEffect(() => {
            getUsers()
        }, [])

  return users
}

export default useUsers
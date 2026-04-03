import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const usePost = () => {
    const [post, setPost] = useState(null)
    const { id } = useParams()

    const getPost = async() => {
        try {
            let res = await fetch(`https://dummyjson.com/posts/${id}`)
            let data = await res.json()
            setPost(data)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getPost()
    }, [id])


  return post
}

export default usePost
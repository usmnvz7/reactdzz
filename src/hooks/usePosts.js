import React from 'react'
import { useState, useEffect } from 'react'

const usePosts = () => {
    const [posts, setPosts] = useState(null)
        
        const getPosts = async () => {
            let url = 'https://dummyjson.com/posts'
            try {
                let res = await fetch(url)
                let data = await res.json()
                setPosts(data.posts)
                
            } catch (error) {
                console.log(error);
            }
        }
        
        useEffect(() => {
            getPosts()
        }, [])

  return posts
}

export default usePosts
import Loader from "../components/Loader"
import { Link } from "react-router-dom"
import usePosts from '../hooks/usePosts'
import views from '../assets/views.png'
import likes from '../assets/likes.png'
import useUsers from "../hooks/useUsers"
import vite from '../assets/vite.svg'

const Posts = () => {
    
    const posts = usePosts()

    const users = useUsers()
    
    
  return (
    <>
        <h1>Страница Постов</h1>
        <div className="container">
            <div className="box post-box">
                {posts ? posts.map((post) => {
                    const user = users?.find(u => u.id === post.userId)
                    return (
                    <div className="post-item" key={post.id}>
                        <div className="post-interactions">
                            <img src={views} alt="" />
                            <span>{post.views}</span>
                            <img src={likes} alt="" />
                            <span>{post.reactions?.likes}</span>
                            <img src={user ? user.image : vite} alt="" />
                            <Link to={user ? `/users/${user?.id}` : '#'}>{user? user.firstName : 'Anonym user'}</Link>
                        </div>
                        <h2>{post.title}..</h2>
                        <ul className="tags">
                            <span>Теги:</span>
                            {post.tags?.map((tag, i) => (
                                <li key={i}>#{tag}</li>
                            ))}
                        </ul>
                        <Link to={`/posts/${post.id}`} className="post-link">Перейти к посту</Link>
                    </div>
                    )
                    }) 
                : <Loader/>
                }
            </div>
        </div>
    </>
  )
}

export default Posts
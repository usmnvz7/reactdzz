import { Link } from "react-router-dom"
import usePost  from '../hooks/usePost'
import views from '../assets/views.png'
import likes from '../assets/likes.png'
import vite from '../assets/vite.svg'
import useUsers from "../hooks/useUsers"

const Post = () => {
    
    const post = usePost()

    const user = useUsers()?.find(u => u.id === post?.userId)

    
  return (
    <>
        <h1>Страница поста</h1>
        {post &&
            <div className="post-wrapper">
              <div className="container post">
                  <div className="post-interactions">
                      <img src={views} alt="" />
                      <span>{post.views}</span>
                      <img src={likes} alt="" />
                      <span>{post.reactions?.likes}</span>
                      <img src={user ? user.image : vite} alt="" />
                      <Link to={user ? `/users/${user?.id}` : '#'}>{user? user.firstName : 'Anonym user'}</Link>
                </div>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  <ul className="tags">
                    <span>Теги:</span>
                    {post.tags?.map((tag, i) => (
                    <li key={i}>#{tag}</li>
                      ))}
                  </ul>
                  <Link to="/posts" className="back">Назад</Link>
              </div> 
            </div>
          }
    </>
  )
}

export default Post
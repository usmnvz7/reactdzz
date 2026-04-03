import { Link } from "react-router-dom"
import useUser  from '../hooks/useUser'

const SingleUser = () => {
    
    const user = useUser()

  return (
    <>
        <h1>Страница пользователя</h1>
        {user && 
            <div className="user-item container">
                <img src={user.image} alt="" />
                <h2>Username: {user.username}</h2>
                <h2>Age: {user.age}</h2>
                <h2>City: {user.address?.city}</h2>
                <Link to="/users" className="back">Назад</Link>
            </div> 
        }
    </>
  )
}

export default SingleUser
import React from 'react'
import Loader from "../components/Loader"
import { Link } from "react-router-dom"
import useUsers from '../hooks/useUsers'

const Users = () => {
    
    const users = useUsers()
    
  return (
    <>
        <h1>Страница пользователей</h1>
        <div className="container">
            <div className="box">
                {users ? users.map((user) => (
                    <Link to={`/users/${user.id}`} className="item" key={user.id}>
                        <img src={user.image} alt="" />
                        <h2>{user.firstName} - {user.lastName} </h2>
                    </Link>
                )) 
                : <Loader/>
                }
            </div>
        </div>
    </>
  )
}

export default Users
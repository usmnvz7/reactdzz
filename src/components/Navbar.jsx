import React from 'react'
import { Link, NavLink } from "react-router-dom"

const links = [
    { url: '/', name: 'Главная' },
    { url: '/users', name: 'Пользователи' },
    { url: '/posts', name: 'Посты' },
    { url: '/products', name: 'Продукты' },
    { url: '/todos', name: 'Задачи' },
]

const Navbar = () => {
  return (
    <>
        <nav className="nav">
            <Link to="/" className="logo">Logo</Link>
            <ul className="list">
                {links.map((item) => (
                    <li key={item.url}>
                        <NavLink to={item.url} className="link">{item.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </>
  )
}

export default Navbar
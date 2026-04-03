import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Users from "./pages/Users"
import Posts from "./pages/Posts"
import NotFound from "./pages/NotFound"
import SingleUser from "./pages/SingleUser"
import Post from "./pages/Post"
import Products from "./pages/Products"
import Product from "./pages/Product"
import Todos from "./pages/Todos"
import Todo from "./pages/Todo"

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<SingleUser/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/posts/:id" element={<Post/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/todos" element={<Todos/>}/>
        <Route path="/todos/:id" element={<Todo/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
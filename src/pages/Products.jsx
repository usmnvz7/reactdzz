import React from 'react'
import useProducts from '../hooks/useProducts'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'

const Products = () => {

    const products = useProducts()
    

  return (
    <>
    <h1>Страница товаров</h1>
    <div className="products container">
        <div className="products-box">
        {products ?
            products.map(product => (
                <div className="products-item">
                <span className='products-discount'>Скидка {product.discountPercentage}%</span>
                <img src={product.thumbnail} alt="" />
                <h2>{product.title}</h2>
                <span>{product.price}$</span>
                <Link to={`/products/${product.id}`}>Перейти к товару</Link>
            </div>
            ))
            :
            <Loader/>
        }
        </div>
    </div>
    </>
  )
}

export default Products
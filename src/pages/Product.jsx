import React from 'react'
import useProduct from '../hooks/useProduct'
import { Link } from 'react-router-dom'

const Product = () => {

    const product = useProduct()

    const discount = Math.floor((Number(product?.discountPercentage) * Number(product?.price)) / 100)
    const discounted = Number(product?.price) - discount

  return (
    <>
        <h1>Страница товара</h1>
        {product && 
            <div className="product container">
            <div className="product-box">
                <h2>{product.title}</h2>
                <img src={product.images[0]} alt="" />
                <p className='product-discount'>{Math.ceil(discounted)}$ <span>{product.price}$</span></p>
                <span>В НАЛИЧИИ: {product.stock || 'нет данных'}</span>
                <span>ОЦЕНКА: {product.rating || 'нет данных'}</span>
                <span>БРЕНД: {product.brand || 'нет данных'}</span>
                <span>ВЕС: {product.weight || 'нет данных'}</span>
                <span>ГАРАНТИЯ: {product.warrantyInformation || 'нет данных'}</span>
                <span>ДОСТАВКА: {product.shippingInformation || 'нет данных'}</span>
                <p>ОПИСАНИЕ: {product.description || 'нет данных'}</p>
                <Link to={'/products'} className='back'>Назад</Link>
            </div>
        </div>
        }
    </>
  )
}

export default Product
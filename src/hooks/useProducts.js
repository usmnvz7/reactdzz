import React, { useEffect, useState } from 'react'

const useProducts = () => {
    const [products, setProducts] = useState(null)

    const getProducts = async () => {
        const url = 'https://dummyjson.com/products'

        try {
            const res = await fetch(url)
            const data = await res.json()
            setProducts(data.products)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
            getProducts()
        },[])

    return products
}

export default useProducts
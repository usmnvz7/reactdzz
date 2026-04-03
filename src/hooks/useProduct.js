import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const useProduct = (paramId) => {
    const [products, setProducts] = useState(null)

    const { id: routeId } = useParams()

    const id = routeId ?? paramId

    const getProduct = async () => {
        const url = `https://dummyjson.com/products/${id}`
        try {
            const res = await fetch(url)
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
            getProduct()
        },[id])

    return products
}

export default useProduct
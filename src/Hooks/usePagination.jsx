import { useState, useEffect } from 'react'
import useFetch from './useFetch'
import apiUrl from 'data/apiUrl'

const usePagination = (category, page = 1, itemsPerPage = 10) => {
    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { data, loading: fetchLoading, error: fetchError } = useFetch(`${apiUrl}${category}`)

    useEffect(() => {
        if (data) {
            setAllProducts(data)
            setTotalProducts(data.length)
            setLoading(fetchLoading)
            setError(fetchError)
        }
    }, [data, fetchLoading, fetchError])

    useEffect(() => {
        const indexOfLastProduct = page * itemsPerPage
        const indexOfFirstProduct = indexOfLastProduct - itemsPerPage
        setProducts(allProducts.slice(indexOfFirstProduct, indexOfLastProduct))
    }, [allProducts, page, itemsPerPage])

    return { products, totalProducts, loading, error }
}

export default usePagination

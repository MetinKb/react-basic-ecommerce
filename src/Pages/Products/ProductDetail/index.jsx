import { useParams } from 'react-router-dom'
import useFetch from 'Hooks/useFetch'

const ProductDetail = () => {
    const { category, id } = useParams()
    const { data: product, loading, error } = useFetch(`http://localhost:3001/api/v1/products/${category}/${id}`)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <img src={product.imgUrl} alt={product.name} className="w-full max-w-lg object-cover rounded-md mb-4" />
            <p className="text-lg mb-4">{product.price} USD</p>
            {product.discountPercentage > 0 && (
                <p className="text-red-500 mb-4">Discount: {product.discountPercentage}%</p>
            )}
        </div>
    )
}

export default ProductDetail

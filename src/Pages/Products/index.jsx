import { useState } from 'react'
import usePagination from 'Hooks/usePagination'
import ListWrapper from 'Components/ListWrapper'
import Pagination from 'Components/Pagination'
import ProductList from './ProductList'
import Button from 'Components/Button'

const ProductsPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [category, setCategory] = useState('computers')
    const itemsPerPage = 10
    const { products, totalProducts, loading, error } = usePagination(category, currentPage, itemsPerPage)

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory)
        setCurrentPage(1)
    }

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div>
            <div className='flex gap-4 items-center justify-center bg-slate-200 p-4 m-4' >
                <Button onClick={() => handleCategoryChange('computers')} >Computers</Button>
                <Button onClick={() => handleCategoryChange('phones')}>Phones</Button>
            </div>
            {loading && <p className='font-bold'>Loading...</p>}
            {error && <p className='font-bold'>{error}</p>}
            <ListWrapper location="products">
                <ProductList products={products} category={category} />
            </ListWrapper>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalProducts={totalProducts}
                paginate={paginate}
            />
        </div>
    )
}

export default ProductsPage

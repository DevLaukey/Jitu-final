import React from 'react'
import ProductCard from './ProductCard'

const ProductGrid = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 p-2 bg-zinc-300'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

        </div>
    )
}

export default ProductGrid
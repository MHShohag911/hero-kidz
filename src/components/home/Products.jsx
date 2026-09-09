import React from 'react';
import ProductCard from '../cards/ProductCard';
import { getProducts } from '@/actions/product';

const Products = async () => {
    const products = await getProducts();
    console.log(products)
    return (
        <div>
            <h2 className='text-center text-4xl font-bold mb-10'>Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    products?.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;
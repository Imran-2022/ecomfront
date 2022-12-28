import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsMutation } from '../../features/product/adminAPI';
import ProductsCard from '../card/ProductsCard';
import FilterProduct from './FilterProduct';

const Products = () => {
    const [getProducts, { data, isLoading, error: responseError, isSuccess }] = useGetProductsMutation();
    const [limit, setLimit] = useState(44);
    // const [skip, setSkip] = useState(0)
    const [order, setOrder] = useState('desc')
    const [sortBy, setSortBy] = useState('createAt')
    useEffect(() => {
        getProducts({ sortBy, order, limit })
    }, [sortBy, order, limit, getProducts])
    if (data) console.log(data)
    return (
        <div className='m-12'>
            <p className='text-center'>Here ALL Products ! </p>
            <div className='grid grid-cols-5'>
                <FilterProduct />

               <div className='col-span-4'>
               <div className='flex flex-wrap justify-center items-center gap-5'>
                    {
                        data && data.map(dt => <ProductsCard dt={dt} />)
                    }
                </div>
               </div>
            </div>

        </div>
    );
};

export default Products;
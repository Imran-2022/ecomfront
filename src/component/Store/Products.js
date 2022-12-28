import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { json, Link } from 'react-router-dom';
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
    
    const {search,filterPrice,filterCategory}= useSelector(state =>state.filter)

    const searchFilter=(data)=>{
        if(search){
          return  data.name.includes(search)
        }else{
            return true;
        }
    }
    const byPriceRange=(data)=>{
        if(filterPrice){
            return data.price<=filterPrice
        }else {
            return true;
        }
    }
    const byCategory=(data)=>{
        if(filterCategory){
            return data.category._id==filterCategory
        }else{
            return true;
        }
    }

    return (
        <div className='m-12'>
            <p className='text-center'>Here ALL Products ! </p>
            <div className='grid grid-cols-5'>
                <FilterProduct />

               <div className='col-span-4'>
               <div className='flex flex-wrap justify-center items-center gap-5'>
                    {
                        data && data
                        .filter(searchFilter)
                        .filter(byPriceRange)
                        .filter(byCategory)
                        .map(dt => <ProductsCard key={dt._id} dt={dt} />)
                    }
                </div>
               </div>
            </div>

        </div>
    );
};

export default Products;
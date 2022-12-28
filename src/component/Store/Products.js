import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalCount,setPage} from '../../features/filter/filterSlice';
import { useGetProductsMutation, useGetTotalOfProductMutation } from '../../features/product/adminAPI';
import ProductsCard from '../card/ProductsCard';
import Pagination from '../ui/Pagination';
import FilterProduct from './FilterProduct';

const Products = () => {
    const dispatch=useDispatch()
    const [getProducts, { data, isLoading, error: responseError, isSuccess }] = useGetProductsMutation();
    const [getTotalOfProduct, {data:TotalData  }] = useGetTotalOfProductMutation();
    const { search, filterPrice, filterCategory,pagination } = useSelector(state => state.filter)
    const {currentPage,limit}=pagination;
    const [order, setOrder] = useState('desc')
    const [sortBy, setSortBy] = useState('createAt')
    useEffect(() => {
        getProducts({ sortBy, order,currentPage,limit  })
        getTotalOfProduct()
    }, [sortBy, order, getProducts,limit,currentPage])

   

    const searchFilter = (data) => {
        if (search) {
            return data.name.includes(search)
        } else {
            return true;
        }
    }
    const byPriceRange = (data) => {
        if (filterPrice) {
            return data.price <= filterPrice
        } else {
            return true;
        }
    }
    const byCategory = (data) => {
        if (filterCategory) {
            return data.category._id == filterCategory
        } else {
            return true;
        }
    }
    // useEffect(()=>{
    //     dispatch(setTotalCount(data?.length))
    // },[data,dispatch])
   
    return (
        <div className='m-12'>
            <p className='text-center text-red-300 font-bold py-4 mb-4 bg-green-600'>Here ALL Products = {TotalData?.total} </p>
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
            <Pagination />
        </div>
    );
};

export default Products;
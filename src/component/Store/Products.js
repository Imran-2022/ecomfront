import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalCount, setPage } from '../../features/filter/filterSlice';
import { useGetProductsMutation, useGetTotalOfProductMutation } from '../../features/product/adminAPI';
import ProductsCard from '../card/ProductsCard';
import Pagination from '../ui/Pagination';
import FilterProduct from './FilterProduct';

const Products = () => {
    const dispatch = useDispatch()
    const [getProducts, { data, isLoading, error: responseError, isSuccess }] = useGetProductsMutation();
    const [getTotalOfProduct, { data: TotalData }] = useGetTotalOfProductMutation();
    const { search, filterPrice, filterCategory, pagination } = useSelector(state => state.filter)
    const { products } = useSelector(state => state.admin)
    const { currentPage, limit } = pagination;
    const [order, setOrder] = useState('desc')
    const [sortBy, setSortBy] = useState('createAt')
    useEffect(() => {
        getProducts({ sortBy, order, currentPage, limit })
        getTotalOfProduct()
    }, [sortBy, order, getProducts])



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

    const modifiedData = products && products.filter(searchFilter).filter(byPriceRange).filter(byCategory)
    const modifiedDataa = products && products.filter(searchFilter).filter(byPriceRange).filter(byCategory).slice((currentPage - 1) * limit, (currentPage * limit))
    useEffect(() => {
        if (modifiedData) dispatch(setTotalCount(modifiedData?.length))
    }, [modifiedData, dispatch])

    return (
        <div className='bg-[#f5f7f9] hidden md:block pb-10'>
            <div className='min-h-[70vh]  grid grid-cols-4 mx-52 py-8'>
                <div className='p-3 border'>
                    <FilterProduct />
                </div>
                <div className='col-span-3  border'>
                    <div className='bg-white min-h-[70vh] p-12 grid grid-cols-3 gap-3 justify-center items-start border'>
                        {
                            modifiedDataa?.map(dt => <ProductsCard key={dt._id} dt={dt} />)
                        }
                    </div>
                    <div className='bg-white min-h-[6vh] p-3 flex justify-end px-12 border'>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
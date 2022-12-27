import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductMutation } from '../../features/product/adminAPI';
import Layout from '../../Layout';

const ProductDetails = () => {
    const {dt}=useParams()
    const [getProduct, { data, isLoading, error: responseError, isSuccess }]=useGetProductMutation()
    useEffect(()=>{
        getProduct(dt)
    },[])
    return (
        <Layout>
            <p>Product Details page <span className='text-red-400 font-bold'>{dt}</span> </p>
            <p>{data?.description}</p>
        </Layout>
    );
};

export default ProductDetails;
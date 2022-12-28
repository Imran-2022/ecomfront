import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductMutation } from '../../features/product/adminAPI';
import { addCategory } from '../../features/product/AdminSlice';
import Layout from '../../Layout';

const ProductCard = () => {
    const { dt } = useParams()
    const [getProduct, { data, isLoading, error: responseError, isSuccess }] = useGetProductMutation()
    useEffect(() => {
        getProduct(dt)
    }, [])
    if (data) console.log(data)
    const { _id: id,name, description,price,category,quantity } = data || {};

    return (
        <Layout title="product Details page" className="mx-64 py-12 min-h-[90vh]">
            <p>Product : <span className='text-red-400 font-bold'>{dt}</span> </p>
            <div className='grid grid-cols-3 gap-5'>
                {
                    id ? <img className='w-full h-fit' src={`${process.env.REACT_APP_API_URL}/api/product/photo/${id}`} alt="" /> :"Loading Image"
                }

                <div className='col-span-2 text-justify flex flex-col gap-5 uppercase'>
                    <p>NAME : {name}</p>
                    <p>PRICE : {price}</p>
                    <p>DESCRIPTION : {description}</p>
                    <p>CATEGORY : {category?.name}</p>
                    <p>QUANTITY : {quantity}</p>
                    <button className='p-2 bg-black text-white'>Add to Cart</button>
                </div>
            </div>
        </Layout>
    );
};

export default ProductCard;
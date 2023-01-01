import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useAddToCarttMutation } from '../../features/cart/cartApi';
import { useGetProductMutation } from '../../features/product/adminAPI';
import Layout from '../../Layout';

const ProductCard = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth);
    const { dt } = useParams()
    const [getProduct, { data, isLoading, error: responseError, isSuccess }] = useGetProductMutation();
    const [addToCart, { data: cartD, isLoading: isloadingd, error: responseErrorr, isSuccess: sd }] = useAddToCarttMutation();
    useEffect(() => {
        getProduct(dt)
    }, [])
    const { _id: id, name, description, price, category, quantity } = data || {};
    const handleAddToCart = (data) => {
        data && addToCart({
            user: user._id,
            product: id,
            price: price,
            category: category.name,
        })
    }


    return (
        <Layout title="product Details page" className="bg-[#f5f7f9] min-h-[92vh]">
            <div className='mx-52 py-12 grid grid-cols-3 min-h-[60vh] gap-4'>
                <div className='bg-red-200  w-full max-h-[40vh] '>
                    {
                        id ? <img className='w-full h-[40vh] border' src={`${process.env.REACT_APP_API_URL}/api/product/photo/${id}`} alt="" /> : "Loading Image"
                    }
                    <p className='px-4 text-center'><span className='underline font-bold'>Product </span> : {name} </p>

                </div>
                <div className='bg-white px-12 py-6 col-span-2 border uppercase text-justify flex flex-col gap-4'>
                    <Link to="/store" className="underline font-bold flex  text-indigo-600 text-sm mb-5">
                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                        Back to Shopping
                    </Link>
                    <p><span className='underline font-bold'>NAME</span>  : {name}</p>
                    <p><span className='underline font-bold'>PRICE</span>  : {price}</p>
                    <div>
                        <p className='underline font-bold'>DESCRIPTION : </p>
                        <p>{description}</p>
                    </div>
                    <p><span className='underline font-bold'>CATEGORY</span>  : {category?.name}</p>
                    <p><span className='underline font-bold'>QUANTITY</span>  : {quantity}</p>
                    <button className='p-2 bg-black text-white w-1/2' onClick={() => handleAddToCart(data)}>Add to Cart</button>
                </div>
            </div>
        </Layout>
    );
};

export default ProductCard;
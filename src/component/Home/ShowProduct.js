import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsMutation } from '../../features/product/adminAPI';

const ShowProduct = () => {
    const [getProducts, { data, isLoading, error: responseError, isSuccess }] = useGetProductsMutation();
    const [limit, setLimit] = useState(44);
    // const [skip, setSkip] = useState(0)
    const [order, setOrder] = useState('desc')
    const [sortBy, setSortBy] = useState('createAt')
    useEffect(() => {
        getProducts({sortBy, order, limit})
    }, [sortBy, order, limit,getProducts])
    if (data) console.log(data)
    return (
        <div>
            <p>Here all Products !</p>

            {
                data && data.map(dt => <div>

                    <img src={`${process.env.REACT_APP_API_URL}/api/product/photo/${dt._id}`} alt="" />
                    <button><Link className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" to={`/product/${dt._id}`}>Details Page</Link></button>
                </div>)
            }
        </div>
    );
};

export default ShowProduct;
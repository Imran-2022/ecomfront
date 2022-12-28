import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({dt}) => {
    return (
        <div className='w-[250px]'>
            <img className='w-full h-44' src={`${process.env.REACT_APP_API_URL}/api/product/photo/${dt._id}`} alt="" />
            <p>Product :{dt.name}</p>
            <p>Price : {dt.price}</p>
            <p>Category :{dt?.category?.name} $</p>
            <button className="p-2 w-full bg-black text-white" ><Link to={`/product/${dt._id}`}>Details Page</Link></button>
        </div>
    );
};

export default ProductsCard;
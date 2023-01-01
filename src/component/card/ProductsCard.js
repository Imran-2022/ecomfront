import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ dt }) => {
    return (
        <div className='basis-52 min-h-[20vh] border flex flex-col justify-between'>
            <img className='w-full h-[140px] border'  src={`${process.env.REACT_APP_API_URL}/api/product/photo/${dt._id}`} alt="" />
            <div className='p-3'>
                <p className='uppercase'>Product : {dt.name}</p>
                <p className='uppercase'>Price : {dt.price} $</p>
                <p className='uppercase'>Category : {dt?.category?.name}</p>
            </div>
            <button className="p-2 w-full bg-slate-100 " ><Link to={`/product/${dt._id}`}>Details Page</Link></button>
        </div>

    );
};

export default ProductsCard;
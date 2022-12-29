import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDeleteCartItemMutation, useUpdateCartItemMutation } from '../../features/cart/cartApi';
import { decrementQuantity, incrementQuantity, removeItem } from '../../features/cart/cartSlice';

const CartItem = ({ dt }) => {
    const [updateCartItem, { data, isLoading, error: responseError, isSuccess }] = useUpdateCartItemMutation()
    const [deleteCartItem,{data:deleteData}]=useDeleteCartItemMutation()
    const { count, product: { name, _id }, price, category,_id:thatStheId } = dt;
    const [counting, setCounting] = useState(count || 1)
    const dispatch=useDispatch();
    const incrementCount = (item) => {
        setCounting(pre => pre + 1)
        const newItem = {
            ...item,
            count: counting+1
        }
        updateCartItem(newItem)
        dispatch(incrementQuantity(thatStheId))
    }
    const decrementCount = (item) => {
        if (counting > 1) setCounting(pre => pre - 1)

        const newItem = {
            ...item,
            count: counting-1
        }
        updateCartItem(newItem)
        dispatch(decrementQuantity(thatStheId))
    }

    // remove items ------

    const handleRemoveItem =()=>{
        if(!window.confirm("are you sure")) return;
        deleteCartItem(thatStheId);
    }

    useEffect(()=>{
        if(deleteData) {
            dispatch(removeItem(thatStheId))
        }
    },[deleteData])

    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
                <div className="w-20">
                    <img className='h-24' src={`${process.env.REACT_APP_API_URL}/api/product/photo/${_id}`} alt="" />

                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{name}</span>
                    <span className="text-red-500 text-xs">{category}</span>
                    <span className="cursor-pointer underline font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={handleRemoveItem}>Remove</span>
                </div>
            </div>
            <div className="flex justify-center w-1/5">
                <button disabled={isLoading} onClick={e => decrementCount(dt)}><svg className=" cursor-pointer fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg></button>


                <input className="mx-2 border text-center w-8" type="text" value={counting} onChange={(e) => setCounting(e.target.value)} readOnly />
                <button disabled={isLoading} onClick={e => incrementCount(dt)}>
                    <svg className="cursor-pointer fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                </button>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
            <span className="text-center w-1/5 font-semibold text-sm">${price * counting}</span>
        </div>
    );
};

export default CartItem;
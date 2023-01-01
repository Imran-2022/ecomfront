import React, { useEffect, useState } from 'react';
import { useGetCategoryMutation } from '../../features/product/adminAPI';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { addFilterCategory } from '../../features/filter/filterSlice';
import { useDispatch } from 'react-redux';


const FilterByCategory = () => {
    const dispatch = useDispatch();
    const [getCategory, { data, isLoading, error: responseError, isSuccess }] = useGetCategoryMutation();
    const [cage, setCage] = useState("")
    useEffect(() => {
        getCategory();
    }, [getCategory])

    const [categoryF,setCategoryFilter]=useState("")

    useEffect(()=>{
        dispatch(addFilterCategory(categoryF))
    },[categoryF,dispatch])

    return (
        <div>
            <div className="form-group">
                {/* <label className="text-muted">{categoryF && categoryF}</label>
                <select name="category" value={categoryF} onChange={e => setCategoryFilter(e.target.value)} className="form-control" required>
                <option value="">----Select Category----</option>
                    
                    {
                        data && data.map(item => (<option value={item._id} key={item._id}>{item.name}</option>))

                    }
                    
                </select> */}
                <p className='py-3 underline'>Filter By Category -</p>
                <ul>
                    {
                        data && data.map((item,idx)=>(<li className='uppercase cursor-pointer flex gap-4 items-center' onClick={()=>setCategoryFilter(item._id)} key={idx}> <AiOutlineArrowRight/> {item.name}</li>))
                    }
                </ul>
            </div>
        </div>
    );
};

export default FilterByCategory;
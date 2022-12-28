import React, { useEffect, useState } from 'react';
import { useGetCategoryMutation } from '../../features/product/adminAPI';

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
            <p>FilterByCategory</p>
            <div className="form-group">
                <label className="text-muted">{categoryF && categoryF}</label>
                <select name="category" value={categoryF} onChange={e => setCategoryFilter(e.target.value)} className="form-control" required>
                <option value="">----Select Category----</option>
                    
                    {
                        data && data.map(item => (<option value={item._id} key={item._id}>{item.name}</option>))

                    }
                    
                </select>
                <p>Cagetory :</p>
                <ul>
                    {
                        data && data.map((item,idx)=>(<li key={idx}>{idx+1}. {item.name}</li>))
                    }
                </ul>
            </div>
        </div>
    );
};

export default FilterByCategory;
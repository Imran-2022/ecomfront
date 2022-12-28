import React, { useEffect, useState } from 'react';
import { useGetCategoryMutation } from '../../features/product/adminAPI';

const FilterByCategory = () => {
    const [getCategory, { data, isLoading, error: responseError, isSuccess }] = useGetCategoryMutation();
    const [cage, setCage] = useState("")
    useEffect(() => {
        getCategory();
    }, [])
    return (
        <div>
            <p>FilterByCategory</p>
            <div className="form-group">
                <label className="text-muted">{cage && cage}</label>
                <select name="category" value={cage} onChange={e => setCage(e.target.value)} className="form-control" required>
                <option value="">----Select Category----</option>
                    
                    {
                        data && data.map(item => (<option value={item._id} key={item._id}>{item.name}</option>))

                    }
                    
                </select>
                <p>Cagetory :</p>
                <ul>
                    {
                        data && data.map((item,idx)=>(<li>{idx+1}. {item.name}</li>))
                    }
                </ul>
            </div>
        </div>
    );
};

export default FilterByCategory;
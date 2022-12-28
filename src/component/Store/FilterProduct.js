import React from 'react';
import FilterByCategory from './FilterByCategory';
import FilterByPrice from './FilterByPrice';
import ResetFilter from './ResetFilter';
import SearchProduct from './SearchProduct';
const FilterProduct = () => {
    return (
        <div>
            <ResetFilter/>
            <p>filter Product According to Your Choice !</p>
            <SearchProduct/>
            <FilterByPrice/>
            <FilterByCategory/>
        </div>
    );
};

export default FilterProduct;
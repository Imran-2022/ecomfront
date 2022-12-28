import React from 'react';
import FilterByCategory from './FilterByCategory';
import FilterByPrice from './FilterByPrice';
import SearchProduct from './SearchProduct';

const FilterProduct = () => {
    return (
        <div>
            <p>filter Product According to Your Choice !</p>
            <SearchProduct/>
            <FilterByPrice/>
            <FilterByCategory/>
        </div>
    );
};

export default FilterProduct;
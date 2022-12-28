import React, { useState } from 'react';

const FilterByPrice = () => {
    const [price, setPrice] = useState(0)
    return (
        <div>
            <p>Filter By Price</p>
            <input type="range" list="tickmarks" value={price} min='10' max="1000" onChange={e => setPrice(e.target.value)} class="w-full" />
                <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Filter</button> <span>Price: $0 — ${price}</span>
        </div>
    );
};

export default FilterByPrice;
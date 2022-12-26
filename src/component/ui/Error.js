import React from 'react';

const Error = ({message}) => {
    return (
        <div>
            <p className='text-red-500 font-bold'>{message}</p>
        </div>
    );
};

export default Error;
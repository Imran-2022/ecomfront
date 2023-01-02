import React from 'react';
import Layout from '../../Layout';
import Products from './Products';

const Store = () => {
    return (
        <Layout title='Store' className='break-words'>
            <Products/>
        </Layout>
    );
};

export default Store;

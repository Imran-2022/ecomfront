import React from 'react';
import Layout from '../../Layout';
import Products from './Products';

const Store = () => {
    return (
        <Layout title='Store' className="h-screen mx-14">
            <p>welcome to Store !</p>
            <Products/>
        </Layout>
    );
};

export default Store;
import React from 'react';
import Layout from '../../Layout';

const Home = () => {
    return (
        <Layout title="Home Page" className=''>
            <p>{process.env.REACT_APP_HELLO_MESSAGE}</p>
        </Layout>
    );
};

export default Home;
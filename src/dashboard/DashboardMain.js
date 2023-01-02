import React from 'react';
import Layout from '../Layout';
import Dashboard from './Dashboard';

const DashboardMain = () => {
    return (
        <Layout title="dashboard" className="">
            <Dashboard/>
        </Layout>
    );
};

export default DashboardMain;
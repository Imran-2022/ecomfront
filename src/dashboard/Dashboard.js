import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='bg-[#f5f7f9] hidden md:block  capitalize'>
            <div className='min-h-[60vh] grid grid-cols-4 mx-52 py-12'>
                <div className='p-3 border'>
                <aside>
                    <div className="overflow-y-auto py-5 px-3 h-full dark:bg-gray-800 dark:border-gray-700">
                        <ul className="space-y-2">
                            <li>
                                <Link to="/dashboard" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group">
                                    <svg aria-hidden="true" className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                    <span className="ml-3"><Link to="/dashboard/productm">Overview</Link> </span>
                                </Link>
                            </li>
                            <li>
                                <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-white dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap"><Link to="/dashboard/create-product">Create Product</Link></span>
                                </button>

                            </li>
                            <li>
                                <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-white dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap"><Link to="/dashboard/create-categorydashboard">Create Category</Link></span>
                                </button>

                            </li>
                            <li>
                                <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-white dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap"><Link className="nav-link" to="paid-product">PaymentSuccessFull</Link></span>
                                </button>

                            </li>
                        </ul>
                    </div>

                </aside>
                </div>
                <div className='col-span-3  border'>
                    <div className='bg-white min-h-[41vh] p-12 grid grid-cols-1 justify-center items-start border'>
                        <div className='basis-52  flex flex-col justify-between'>
                            <div className='px-3'>
                            <Outlet />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white min-h-[6vh] p-3 flex justify-end px-12 border'>
                        <p>Developed By @ <span> <a className='underline' href="https://www.linkedin.com/in/md-imranul-haque/" target="_blank" rel="noreferrer">Md Imranul Haque</a> </span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
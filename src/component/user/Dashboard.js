import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../../Layout';
import { useGetCategoryMutation } from '../../features/product/adminAPI';
import { useEffect } from 'react';

const Dashboard = () => {
    const auth = useSelector((state) => state.auth);

    const [getCategory, { data, isLoading, error: responseError, isSuccess }] = useGetCategoryMutation();

    useEffect(() => {
        getCategory()
    }, [getCategory])


    const { name, email, role } = auth?.user || {};
    const UserLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/cart">My Cart</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="#">Update Profile</Link>
                    </li>
                </ul>
            </div>
        )
    };

    const PurchaseHistory = () => (
        <div className="card mb-5">
            <h3 className="card-header">Purchase History</h3>
            <ul className="list-group">
                <li className="list-group-item">History</li>
            </ul>
        </div>
    );


    const UserInfo = () => (
        <div className="card mb-5">
            <h3 className="text-center">User Information</h3>
            <div className=" flex items-center justify-center px-5 py-5 gap-9">
                <div className="rounded-lg shadow-xl bg-gray-900 text-white" style={{ width: "450px" }}>
                    <div className="px-8 py-6">
                        <p><em className="text-blue-400">const</em> <span className="text-green-400">User Links</span> <span className="text-pink-500">=</span> <em className="text-blue-400">function</em>() &#123;</p>
                        <p>&nbsp;&nbsp;<span className="text-pink-500">return</span> &#123;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-yellow-300 underline">{<Link className="nav-link" to="/cart">My-Cart</Link>}</span>,</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-yellow-300 underline">{<Link className="nav-link" to="#">Update Profile</Link>}</span>,</p>

                        <p>&nbsp;&nbsp;&#125;</p>
                        <p>&#125;</p>
                    </div>
                </div>
                <div className="rounded-lg shadow-xl bg-gray-900 text-white" style={{ width: "450px" }}>
                    <div className="border-b border-gray-800 px-8 py-3">
                        <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div><div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div><div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="px-8 py-6">
                        <p><em className="text-blue-400">const</em> <span className="text-green-400">aboutMe</span> <span className="text-pink-500">=</span> <em className="text-blue-400">function</em>() &#123;</p>
                        <p>&nbsp;&nbsp;<span className="text-pink-500">return</span> &#123;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;name: <span className="text-yellow-300">'{name}'</span>,</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;email: <span className="text-yellow-300">'{email}'</span>,</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;role: <span className="text-yellow-300">'{role}'</span>,</p>
                        {/* <p>&nbsp;&nbsp;&nbsp;&nbsp;website: <span className="text-yellow-300">'<a rel="noreferrer" href="https://scottwindon.com" target="_blank" className="text-yellow-300 hover:underline focus:border-none">https://scottwindon.com</a>'</span>,</p> */}
                        <p>&nbsp;&nbsp;&#125;</p>
                        <p>&#125;</p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Layout title="Dashboard" className="container-fluid h-full mx-60 mt-11">
            {/* <div className="row">
                <div className="col-sm-3">
                <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" ><Link to="/create-category">Create Category</Link></button>
                <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" ><Link to="/create-product">Create Product</Link></button>
                <div className='p-12'>
                {
                    data && data.map((dt,idx)=><p key={idx}>{dt?.name}</p>)
                }
                </div>
                    <UserLinks />
                </div>
                <div className="col-sm-9">
                    <UserInfo />
                    <PurchaseHistory />
                </div>
            </div> */}
            <div className="grid grid-cols-5 gap-5 h-2/5">
                {/* <div className='flex justify-center  h-screen'>
                   <div>
                   
                    
                   </div>
                </div> */}
                <aside>
                    <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <ul class="space-y-2">
                            <li>
                                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                    <span class="ml-3">Overview</span>
                                </a>
                            </li>
                            <li>
                                <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                                    <span class="flex-1 ml-3 text-left whitespace-nowrap"><Link to="/dashboard">Create Product</Link></span>
                                </button>

                            </li>
                            <li>
                                <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                                    <span class="flex-1 ml-3 text-left whitespace-nowrap"><Link to="/dashboard/create-category">Create Category</Link></span>
                                </button>

                            </li>
                        </ul>
                    </div>
                   
                </aside>

                <div className='col-span-4'>
                    <Outlet />

                </div>
            </div>

        </Layout>
    )
}

export default Dashboard;
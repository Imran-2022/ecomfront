import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../../Layout';

const Dashboard = () => {
    const auth = useSelector((state) => state.auth);
    const { name, email, role } = auth?.user;
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
                        <p>&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-yellow-300 underline">{ <Link className="nav-link" to="/cart">My-Cart</Link>}</span>,</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-yellow-300 underline">{ <Link className="nav-link" to="#">Update Profile</Link>}</span>,</p>
                        
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
        <Layout title="Dashboard" className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <UserLinks />
                </div>
                <div className="col-sm-9">
                    <UserInfo />
                    <PurchaseHistory />
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard;
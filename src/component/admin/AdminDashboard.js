import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../../Layout';

const AdminDashboard = () => {
    const auth = useSelector((state) => state.auth);
    const { name, email, role } = auth?.user;
    const UserLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/category">Create Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/product">create Product</Link>
                    </li>
                </ul>
            </div>
        )
    };

    const UserInfo = () => (
        <div className="card mb-5">
            <h3 className="card-header">User Information</h3>
            <ul className="list-group">
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{role}</li>
            </ul>
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
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashboard;
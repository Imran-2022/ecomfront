import { Routes, Route } from "react-router-dom";
import Login from "./component/Auth/login/Login";
import Register from "./component/Auth/register/Register";
import Home from "./component/Home/Home";
import ResetPassword from "./component/Auth/reset/ResetPassword"
import Cart from "./component/cart/Cart";
import NotFound from "./component/ui/NotFound";
import Dashboard from "./component/user/Dashboard";
import useAuth from "./hooks/useAuth";
const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ResetPassword />} />
            <Route path="/cart" element={<Cart />} />
            {
                useAuth() && <Route path="/dashboard" element={<Dashboard />} />
            }
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Main;
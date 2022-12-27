import { Routes, Route } from "react-router-dom";
import Login from "./component/Auth/login/Login";
import Register from "./component/Auth/register/Register";
import Home from "./component/Home/Home";
import ResetPassword from "./component/Auth/reset/ResetPassword"
import Cart from "./component/cart/Cart";
import NotFound from "./component/ui/NotFound";
import Dashboard from "./component/user/Dashboard";
import useAuth from "./hooks/useAuth";
import NewPasswordLandingPage from "./component/Auth/reset/NewPasswordLandingPage";
import { EmailVerificationLandingPage } from "./component/Auth/verify/EmailVerificationLandingPage";
import { PleaseVerifyEmailPage } from "./component/Auth/verify/PleaseVerifyEmail";
import CreateCategory from "./component/product/CreateCategory"
import CreateProduct from "./component/product/CreateProduct";
const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ResetPassword />} />
            <Route path="/new-password/:npassword" element={<NewPasswordLandingPage />} />
            <Route path="/verify-email" element={<PleaseVerifyEmailPage />} />
            <Route path="/create-category" element={<CreateCategory />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/cart" element={<Cart />} />
            {
                useAuth() && <Route path="/dashboard" element={<Dashboard />} />
            }
             <Route path="/verify-email/:verificationString" element={<EmailVerificationLandingPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Main;
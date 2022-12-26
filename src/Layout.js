import { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "./component/Footer/Footer";
import MenuBar from "./component/MenuBar";

const Layout = ({ title = "Title", className, children }) => {
    useEffect(() => {
        document.title = title;
    }, [title])

    const auth = useSelector((state) => state.auth);
    console.log(auth);
    return (
        <div>
            <MenuBar />
            <p className="text-center">{JSON.stringify(auth)}</p>
            <div className={className}>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
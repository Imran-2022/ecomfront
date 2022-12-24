import { useEffect } from "react";
import MenuBar from "./component/MenuBar";

const Layout = ({ title = "Title", className, children }) => {
    useEffect(() => {
        document.title = title;
    }, [title])

    return (
        <>
            <MenuBar />
            <div className={className}>
                {children}
            </div>
        </>
    );
};

export default Layout;
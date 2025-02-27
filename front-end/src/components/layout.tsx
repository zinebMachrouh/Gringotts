import { Outlet } from "react-router-dom";

const Layout = () => {
    return (  
        <section className="layout">
            <Outlet />
        </section>
    );
}
 
export default Layout;
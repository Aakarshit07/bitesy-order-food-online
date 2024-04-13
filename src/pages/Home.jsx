import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};
export default Home;
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import Category from "../Shared/Category";

const Root = () => {
    return (
        <div className="overflow-hidden">
            <Header></Header>
            <div>
                <Navbar></Navbar>
                <Category></Category>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;
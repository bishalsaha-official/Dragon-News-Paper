import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNav from "../components/layoutComponents/LeftNav";
import RightNav from "../components/layoutComponents/RightNav";
import Navbar from "../components/Navbar";

const HomeLayouts = () => {
    return (
        <div className="font-poppins max-w-screen-xl mx-auto">
            <header>
                <Header></Header>
                <section className="max-w-7xl mx-auto bg-[#F3F3F3] rounded p-4">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="mt-7">
                <Navbar></Navbar>
            </nav>
            <main className="mt-7 grid md:grid-cols-12 gap-5">
                <aside className="col-span-3">
                    <LeftNav></LeftNav>
                </aside>
                <section className="col-span-6"><Outlet></Outlet></section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
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
            <main className="mt-7 grid md:grid-cols-12 gap-4">
                <aside className="col-span-3">left nav</aside>
                <section className="col-span-6">center</section>
                <aside className="col-span-3">righ nav</aside>
            </main>
        </div>
    );
};

export default HomeLayouts;
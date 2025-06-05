import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="max-w-7xl mx-auto bg-[#F3F3F3] rounded p-4">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default HomeLayouts;
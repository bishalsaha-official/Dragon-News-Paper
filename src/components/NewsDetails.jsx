import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";
import RightNav from "./layoutComponents/RightNav";

const NewsDetails = () => {
    const data = useLoaderData()
    const news = data.data[0];

    return (
        <div className="font-poppins max-w-7xl mx-auto">
            <header>
                <Header></Header>
            </header>
            <main className="grid md:grid-cols-12 gap-8">
                <section className="col-span-9">
                    <h2 className="text-xl font-bold mb-5">Dragon News</h2>
                    <div className="my-6">
                        <div className="card bg-base-100 shadow-xl">
                            <figure>
                                <img src={news.image_url} alt="News Image" className="w-full"/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl font-bold">
                                    {news.title}
                                    <div className="badge badge-success ml-2">{news.rating?.badge}</div>
                                </h2>
                                <p className="text-sm text-gray-500">
                                    By <span className="font-medium text-gray-700">{news.author?.name}</span> on{' '}
                                    <span>{new Date(news.author?.published_date).toDateString()}</span>
                                </p>
                                <p className="text-justify mt-2 text-gray-700">
                                    {news.details}
                                </p>
                                <div className="card-actions justify-start mt-4">
                                    <Link to={`/category/${news?.category_id}`} className="btn btn-error btn-sm text-white">
                                        ← All news in this category
                                    </Link>
                                    <div className="ml-auto flex gap-2">
                                        <div className="badge badge-info text-white">Views: {news.total_view}</div>
                                        {news.others_info?.is_trending && (
                                            <div className="badge badge-warning text-white">Trending</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
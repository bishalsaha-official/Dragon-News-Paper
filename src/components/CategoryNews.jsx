import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const CategoryNews = () => {
    const { data: news } = useLoaderData()
    // console.log(news)
    return (
        <div>
            <div>
                <h2 className="text-xl font-bold mb-5">Dragon News Home</h2>
                <p className="text-xl font-bold text-gray-600">Total Find These Item: {news.length}</p>
            </div>
            <div className="my-8">
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;
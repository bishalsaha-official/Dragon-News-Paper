import { Link } from "react-router-dom";
import { FaRegEye, FaStar } from "react-icons/fa";

const NewsCard = ({ singleNews }) => {
    const { _id, title, author, thumbnail_url, details, total_view, rating, others_info } = singleNews;

    return (
        <div className="card bg-base-100 shadow-md border mb-5">
            {/* Author Info */}
            <div className="flex items-center justify-between px-4 pt-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold text-sm">{author?.name}</p>
                        <p className="text-xs text-gray-500">{new Date(author?.published_date).toDateString()}</p>
                    </div>
                </div>
                {/* Trending Tag */}
                {others_info?.is_trending && (
                    <span className="badge badge-error text-white text-xs">Trending</span>
                )}
            </div>

            {/* Thumbnail */}
            <figure className="px-4 py-2">
                <img src={thumbnail_url} alt="Thumbnail" className="rounded-lg w-full h-96 object-cover" />
            </figure>

            {/* Content */}
            <div className="px-4 pb-4 space-y-2">
                <h2 className="font-bold text-lg">{title}</h2>
                <p className="text-sm text-gray-600">
                    {details.length > 100 ? details.slice(0, 100) + "..." : details}
                </p>
                <Link to={`/news/${_id}`} className="text-orange-600 font-medium text-sm hover:underline">
                    Read More
                </Link>

                {/* Footer Info */}
                <div className="flex items-center justify-between text-sm pt-2">
                    <div className="flex items-center gap-1 text-orange-500">
                        <FaStar />
                        <span>{rating?.number}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                        <FaRegEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default NewsCard;
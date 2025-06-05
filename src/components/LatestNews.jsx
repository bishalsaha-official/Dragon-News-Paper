import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-4 items-center">
            <p className="bg-[#D72050] px-4 py-2 text-white font-bold rounded">Latest</p>
            <div>
                <Marquee pauseOnHover={Boolean} className="font-bold text-[#403F3F]">
                    <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                    <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                    <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-5">Find Us On</h2>
            <div className="join join-vertical w-full">
                <button className="btn join-item justify-start bg-white p-3 text-gray-500"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start bg-white p-3 text-gray-500"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item justify-start bg-white p-3 text-gray-500"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="flex flex-col gap-3">
            <button className="btn justify-start rounded bg-white border-blue-600 text-blue-600"><FaGoogle></FaGoogle> Login With Google</button>
            <button className="btn justify-start rounded bg-white border-gray-900"><FaGithub></FaGithub> Login With GitHub</button>
        </div>
    );
};

export default SocialLogin;
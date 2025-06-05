import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";
import swimming from "../../assets/swimming.png"
import playground from "../../assets/playground.png"
import classImage from "../../assets/class.png"

const RightNav = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-5">Login With</h2>
            <SocialLogin></SocialLogin>
            <section className="mt-7">
                <FindUs></FindUs>
            </section>
            <section className="mt-7">
                <h2 className="text-xl font-bold text-gray-600 mb-5">Q-zone</h2>
                <img className="mb-5" src={swimming} alt="swimming" />
                <img className="mb-5" src={playground} alt="playground" />
                <img src={classImage} alt="class" />
            </section>
        </div>
    );
};

export default RightNav;
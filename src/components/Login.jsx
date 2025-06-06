import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {logInUserAccount, setUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogInUser = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)

        logInUserAccount(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 p-8">
                <h2 className="text-xl font-bold mb-5 text-center">Login your account</h2>
                <form onSubmit={handleLogInUser} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered w-full" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn w-full bg-[#403F3F] text-white">Login</button>
                    </div>
                    <p>Don't Have an Account ? <Link className="text-red-500 font-bold" to="/auth/register">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
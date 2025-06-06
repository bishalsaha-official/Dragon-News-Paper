import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 p-8">
                <h2 className="text-xl font-bold mb-5 text-center">Register your account</h2>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Your Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Your Photo Url" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn w-full bg-[#403F3F] text-white">Login</button>
                    </div>
                    <p>Allready Have an Account? <Link className="text-red-500 font-bold" to="/auth/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
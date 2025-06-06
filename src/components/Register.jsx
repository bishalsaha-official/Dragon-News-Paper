import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { setUser, createNewUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, photo, email, password)

        createNewUser(email, password)
            .then((result) => {
                const user = result.user
                setUser(user)
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
                <h2 className="text-xl font-bold mb-5 text-center">Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Your Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <input name="photo" t type="text" placeholder="Your Photo Url" className="input input-bordered w-full" />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn w-full bg-[#403F3F] text-white">Register</button>
                    </div>
                    <p>Allready Have an Account? <Link className="text-red-500 font-bold" to="/auth/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
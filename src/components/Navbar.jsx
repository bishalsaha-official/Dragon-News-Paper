import { Link, NavLink } from "react-router-dom";
import userLogo from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </>

    const { user, logOutUser } = useContext(AuthContext)
    const logout = () => {
        logOutUser()
            .then(() => {
                // SignOut Success
            })
            .catch((error) => {
                // An error happened.
            });
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <p className="text-xl text-gray-600">{user?.email}</p>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center gap-3 justify-center">
                    <img src={userLogo} alt="" />
                    {
                        user && user.email ?
                            <button onClick={logout} className="btn bg-[#403F3F] text-white">LogOut</button>
                            :
                            <Link to="/auth/login" className="btn bg-[#403F3F] text-white">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
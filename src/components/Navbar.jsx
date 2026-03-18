import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';


const Navbar = () => {
    // Helper function to handle active styling
    const activeStyle = ({ isActive }) =>
        isActive
            ? "text-[#7C3AED] font-bold border-b-2 border-[#7C3AED] rounded-none px-1"
            : "font-medium hover:text-[#7C3AED] transition-colors";

    return (
        <nav className="navbar bg-base-100 px-4 md:px-10 py-4 border-b border-base-200">
            {/* Logo Section */}
            <div className="navbar-start">
                <Link to="/" className="flex items-center gap-2 cursor-pointer">
                    <img
                        className="h-10 w-auto"
                        src="/assets/logo.png"
                        alt="HERO.IO Logo"
                    />
                    <span className="text-xl font-bold tracking-tight text-[#7C3AED]">
                        HERO.IO
                    </span>
                </Link>
            </div>

            {/* Navigation Links - Centered */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-6 px-1">
                    <li>
                        <NavLink to="/" className={activeStyle}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/apps" className={activeStyle}>
                            Apps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/installation" className={activeStyle}>
                            Installation
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* GitHub Button Section */}
            <div className="navbar-end">
                {/* Mobile Menu Toggle */}
                <div className="dropdown dropdown-end lg:hidden mr-2">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/apps">Apps</NavLink></li>
                        <li><NavLink to="/installation">Installation</NavLink></li>
                    </ul>
                </div>

                {/* Contribute Button - Navigates to /contribution */}
                <Link
                    to="/contribution"
                    className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none px-6 shadow-md"
                >
                    <FaGithub className="text-lg" />
                    Contribute
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
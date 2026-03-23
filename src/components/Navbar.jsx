import React from 'react';
import { FaGithub, FaHome, FaThLarge, FaDownload } from 'react-icons/fa'; // Added more icons
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    // Enhanced active styling with a pill-shaped background
    const activeStyle = ({ isActive }) =>
        isActive
            ? "bg-[#7C3AED]/10 text-[#7C3AED] font-bold px-4 py-2 rounded-xl flex items-center gap-2 transition-all duration-300"
            : "font-medium text-gray-600 hover:text-[#7C3AED] px-4 py-2 flex items-center gap-2 transition-all duration-300 hover:bg-gray-50 rounded-xl";

    return (
        <nav className="sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="navbar container mx-auto px-4 md:px-10 py-3">

                {/* Logo Section */}
                <div className="navbar-start">
                    <Link to="/" className="group flex items-center gap-3 cursor-pointer">
                        <div className="p-2 bg-[#7C3AED] rounded-xl shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform">
                            <img
                                className="h-7 w-auto brightness-0 invert"
                                src="/assets/logo.png"
                                alt="Logo"
                            />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-[#1E293B]">
                            HERO<span className="text-[#7C3AED]">.IO</span>
                        </span>
                    </Link>
                </div>

                {/* Navigation Links - Centered Pill Design */}
                <div className="navbar-center hidden lg:flex">
                    <div className="bg-gray-100/50 p-1.5 rounded-2xl flex gap-2">
                        <NavLink to="/" className={activeStyle}>
                            <FaHome className="text-lg" />
                            Home
                        </NavLink>
                        <NavLink to="/apps" className={activeStyle}>
                            <FaThLarge className="text-base" />
                            Apps
                        </NavLink>
                        <NavLink to="/installation" className={activeStyle}>
                            <FaDownload className="text-base" />
                            Installed
                        </NavLink>
                    </div>
                </div>

                {/* End Section */}
                <div className="navbar-end gap-3">
                    {/* GitHub Button - Gradient & Glow */}
                    <a
                        href="https://github.com/md-almahfuz/mission-restart-a3-hero-io"
                        target="_blank"
                        rel="noreferrer"
                        className="btn hidden sm:flex bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:shadow-purple-200 hover:shadow-xl text-white border-none px-6 rounded-2xl normal-case transition-all hover:-translate-y-0.5"
                    >
                        <FaGithub className="text-xl" />
                        <span>Contribute</span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E293B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-[1] p-3 shadow-2xl bg-white border border-gray-100 rounded-2xl w-56 text-[#1E293B]">
                            <li className="mb-1"><NavLink to="/" className="rounded-xl py-3"><FaHome /> Home</NavLink></li>
                            <li className="mb-1"><NavLink to="/apps" className="rounded-xl py-3"><FaThLarge /> Browse Apps</NavLink></li>
                            <li><NavLink to="/installation" className="rounded-xl py-3"><FaDownload /> My Apps</NavLink></li>
                            <div className="divider my-2"></div>
                            <li>
                                <a href="https://github.com" className="bg-[#7C3AED] text-white rounded-xl py-3 justify-center">
                                    <FaGithub /> Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
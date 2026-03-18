import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router';


const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content border-t border-base-300 pt-16 pb-8">
            {/* 1. Main Grid Container */}
            <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">

                {/* Column 1: Brand & About */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <img
                            src="/assets/logo.png"
                            alt="HERO.IO Logo"
                            className="h-10 w-auto"
                        />
                        <span className="text-2xl font-bold text-[#7C3AED]">HERO.IO</span>
                    </div>
                    <p className="text-gray-500 leading-relaxed text-sm">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-[#7C3AED] transition-all border border-gray-100">
                            <FaTwitter size={18} />
                        </a>
                        <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-[#7C3AED] transition-all border border-gray-100">
                            <FaGithub size={18} />
                        </a>
                        <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-[#7C3AED] transition-all border border-gray-100">
                            <FaInstagram size={18} />
                        </a>
                    </div>
                </div>

                {/* Column 2: Company Links */}
                <div>
                    <h6 className="font-bold text-[#1E293B] mb-6 uppercase text-xs tracking-widest">Company</h6>
                    <ul className="flex flex-col gap-3 text-sm">
                        <li><Link to="/about" className="hover:text-[#7C3AED] transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-[#7C3AED] transition-colors">Contact</Link></li>
                        <li><Link to="/jobs" className="hover:text-[#7C3AED] transition-colors">Jobs</Link></li>
                        <li><Link to="/press" className="hover:text-[#7C3AED] transition-colors">Press Kit</Link></li>
                    </ul>
                </div>

                {/* Column 3: Legal Links */}
                <div>
                    <h6 className="font-bold text-[#1E293B] mb-6 uppercase text-xs tracking-widest">Legal</h6>
                    <ul className="flex flex-col gap-3 text-sm">
                        <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Terms of Use</a></li>
                        <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Cookie Policy</a></li>
                    </ul>
                </div>

                {/* Column 4: Newsletter */}
                <div>
                    <h6 className="font-bold text-[#1E293B] mb-6 uppercase text-xs tracking-widest">Newsletter</h6>
                    <p className="text-gray-500 text-sm mb-4">Stay updated with our latest releases.</p>
                    <div className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full focus:outline-[#7C3AED] bg-white border-gray-200" />
                        <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none w-full">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. Bottom Copyright Bar */}
            <div className="container mx-auto px-4 md:px-10 mt-16 pt-8 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-400">
                    &copy; {new Date().getFullYear()} HERO.IO Inc. All rights reserved. Built with ❤️ for productivity.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
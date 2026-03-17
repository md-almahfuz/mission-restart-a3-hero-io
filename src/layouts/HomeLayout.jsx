import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    const { state } = useNavigation();
    return (
        <div>
            <header>
                <nav className='w-11/12 mx-auto bg-base-100 shadow-sm'>
                    <Navbar></Navbar>

                </nav>

            </header>
            <main className="w-11/12 grid grid-cols-12 mx-auto my-20 gap-5 ">
                <section className="main col-span-12 py-5">
                    {state == "loading" ? <Loading /> : <Outlet></Outlet>}
                </section>
            </main>

            <footer>
                <div className="w-11/12 mx-auto my-3 ">
                    <Footer></Footer>
                </div>
            </footer>
        </div>
    );
};

export default HomeLayout;
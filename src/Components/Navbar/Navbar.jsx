import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {


    const links = <>
        {/* <li ><a className='btn  btn-outline btn-accent'>Home</a></li> */}
        <NavLink to={'/home'} className='btn mr-9  btn-outline btn-accent'>Home</NavLink>
        <NavLink to={'/listedBooks'} className={'mr-9 btn'} >Listed Books</NavLink>
        <NavLink to={'/pages'} className={'mr-9 btn'}>Pages to read</NavLink>
    </>

    return (
        <div>
            <div className="navbar lg:w-[1200px] mx-auto  bg-base-100 mb-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Boipoka</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                    <a className="btn btn-success text-white rounded-lg">Sign In</a>
                    <a className="btn btn-info text-white rounded-lg">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
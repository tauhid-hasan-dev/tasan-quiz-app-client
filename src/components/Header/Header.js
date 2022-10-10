import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="navbar bg-navbar-color  shadow-md px-5  lg:px-32 py-5 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white text-6xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink
                    to="/home"
                    className={({ isActive }) =>
              isActive ? 'text-blue-color border-b-2 border-logo-color': undefined
            }
                    >Home</NavLink>

                            <NavLink to='/statistics' className={({ isActive }) =>
              isActive ? 'text-blue-color border-b-2 border-logo-color': undefined
            } >Statistics</NavLink>

                            <NavLink to='/blog' className={({ isActive }) =>
              isActive ? 'text-blue-color border-b-2 border-logo-color': undefined
            }>Blog</NavLink>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-3xl  lg:text-4xl text-blue-color font-bold ">
                        tasan quiz app</Link>
                </div>
                <div className=" navbar-center hidden lg:flex h-16 w-16 ">
                   {/*  <FontAwesomeIcon icon={faBurger} /> */}
                   <img src={logo} alt="" />
                    
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-slate-100 gap-5 text-lg ">
                    <NavLink
                    to="/home"
                    className={({ isActive }) =>
              isActive ? 'text-blue-color border-b-2 border-logo-color': undefined
            }
                    >Home</NavLink>

                            <NavLink to='/statistics' className={({ isActive }) =>
              isActive ? 'text-blue-color border-b-2 border-logo-color': undefined
            } >Statistics</NavLink>

                            <NavLink to='/blog' className={({ isActive }) =>
              isActive ? 'text-blue-color border-b-2 border-logo-color': undefined
            }>Blog</NavLink>

                            
                    </ul>
                </div> 
            </div>
    );
};

export default Header;
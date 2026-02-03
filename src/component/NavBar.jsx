import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { RiCloseLine, RiMenu2Line, RiLoginCircleLine, RiUserAddLine } from "@remixicon/react";

function NavBar() {

    const [menu, setMenu] = useState(false);
    
    return (
        <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 bg-gray-900">
            <span className="text-xl font-bold tracking-wide">AutoSphere</span>

            <ul className={`
            ${menu ? "block" : "hidden"}
            mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>

                <li className="text-base transition-all duration-300 p-1 md:p-0">
                    <NavLink to="/">Home</NavLink>
                </li>

                <li className="text-base transition-all duration-300 p-1 md:p-0">
                    <NavLink to="/about">About</NavLink>
                </li>

                <li className="text-base transition-all duration-300 p-1 md:p-0">
                    <NavLink to="/services">Services</NavLink>
                </li>

                <li className="text-base transition-all duration-300 p-1 md:p-0">
                    <NavLink to="/feedback">Feeback</NavLink>
                </li>

                <li className="text-base transition-all duration-300 p-1 md:p-0">
                    <NavLink to="/contact">Contact Us</NavLink>
                </li>

                <div className="hidden md:flex items-center gap-4 text-xl">

                    <NavLink
                        to="/login"
                        className="hover:text-blue-400 transition"
                        title="Login"
                    >
                        <RiLoginCircleLine />
                    </NavLink>

                    <NavLink
                        to="/register"
                        className="hover:text-green-400 transition"
                        title="Register"
                    >
                        <RiUserAddLine />
                    </NavLink>

                </div>

                {/* // for mobile  */}
                <li className="md:hidden text-base p-1">
                    <NavLink to="/login" onClick={() => setMenu(false)}>
                        Login
                    </NavLink>
                </li>

                <li className="md:hidden text-base p-1">
                    <NavLink to="/register" onClick={() => setMenu(false)}>
                        Register
                    </NavLink>
                </li>
            </ul>

            {menu ? (
                <RiCloseLine
                    size={30}
                    className="md:hidden absolute right-10 top-6 transition-all duration-300"
                    onClick={() => setMenu(false)}
                />
            ) : (
                <RiMenu2Line
                    size={30}
                    className="md:hidden absolute right-10 top-6 transition-all duration-300"
                    onClick={() => setMenu(true)}
                />
            )}
        </nav>
    )
}

export default NavBar
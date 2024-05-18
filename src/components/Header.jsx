import React from 'react'
import { FcSearch } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className='  bg-blue-100  shadow-md py-2' >
            <div className="flex justify-around flex-wrap  items-center">
                <NavLink to={'/home'}>
                    <h1 className='font-bold text-small sm:text-xl flex flex-wrap'>
                        <span className='text-[#F62833]'>susanoo</span>
                        <span className='text-[#3B82F6]'>Estate</span>
                    </h1>
                </NavLink>
                <form noValidate className='bg-blue-200 p-2  items-center justify-between flex rounded-md w-[50%] md:w-[35%] sm:w-[25%]'>
                    <input type="text" placeholder='search...' className='bg-transparent outline-none  w-full' />
                    <FcSearch className=' text-3xl' />
                </form>
                <ul className='flex flex-wrap gap-5 py-2 font-sans font-semibold'>
                    <li className=' hover:text-[#F62833]   cursor-pointer'><NavLink to={'/'} style={({
                        isActive
                    }) => ({
                        color: isActive ? 'red ' : 'black',
                    })}>Home</NavLink></li>
                    <li className=' hover:text-[#F62833]  cursor-pointer' ><NavLink to={'/about'} style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black'
                    })}>About</NavLink></li>
                    <li className=' hover:text-[#F62833]  cursor-pointer'><NavLink to={'/sign-in'} style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black'
                    })}>Sign-in</NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
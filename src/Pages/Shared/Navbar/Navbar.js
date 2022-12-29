import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <>

        <Link className='m-2 font-semibold text-lg' to='/'>Home</Link>
        <Link className='m-2 font-semibold text-lg' to='/media'>Media</Link>
        <Link className='m-2 font-semibold text-lg' to='/message'>Message</Link>
        <Link className='m-2 font-semibold text-lg' to='/about'>About</Link>

    </>
    return (
        <div>
            <div className="navbar h-20 mb-12 bg-pink-300">
                <div className="flex-1">
                    <div>
                        <a href='/' className="btn btn-ghost font-bold text-2xl normal-case">Social</a>
                    </div>

                    <div className="form-control flex justify-center rounded-3xl px-60 ml-60">
                        <input type="text" placeholder="Search" className="input w-80 input-bordered rounded-3xl" />
                    </div>
                </div>
                <div className="flex-none gap-2">
                    <div>
                        {menuItems}
                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.pinimg.com/originals/de/99/93/de9993e752fc52646579448542c411d3.jpg" alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a href='/' className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a href='/'>Settings</a></li>
                            <li><a href='/'>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
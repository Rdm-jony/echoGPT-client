import React from 'react';
import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <div className='flex justify-between bg-slate-50 items-center py-2'>
            <div className='flex items-center gap-5'>
                <img className='w-14 h-14' src={logo} alt="" />
                <h2 className='font-bold text-4xl text-accent'>E c h o G P T</h2>
            </div>
            <button className='btn btn-accent text-white'>Sign In</button>
        </div>
    );
};

export default Header;
import React, { useContext } from 'react';
import logo from '../assets/logo.svg'
import { AuthContext } from '../Provider/AuthProvider';
import { MdLogout } from 'react-icons/md';
import LogInModal from '../Modal/LogInModal';
import { useNavigate } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';

const Header = () => {
    const navigate = useNavigate()
    const { user, logOut, setIsText } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut().then(() => {
            setIsText(false)
            navigate("/")
        })
    }


    return (
        <div className='sticky  top-0 z-30'>
            <div className='flex justify-between bg-slate-50 items-center py-2 '>
                <div className='flex items-center gap-5'>
                    <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                        <IoMdMenu className='text-accent text-3xl' />
                    </label>
                    <img className='w-14 h-14' src={logo} alt="" />
                    <h2 className='font-bold lg:text-4xl text-2xl text-accent'>E c h o G P T</h2>
                </div>
                {
                    user ? <details className="dropdown mr-10 dropdown-end">

                        <summary>
                            <div className="avatar">
                                <div className="ring-white ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                    <p className='bg-accent w-full h-full flex justify-center items-center font-bold text-2xl uppercase'>{user?.email.substring(0, 1)}</p>
                                </div>
                            </div>
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li onClick={handleLogOut}><a><MdLogout /> Log Out</a></li>
                        </ul>
                    </details> : <button onClick={() => {
                        !user && document.getElementById('my_modal_3').showModal()
                    }} className='btn btn-accent text-white'>Sign In</button>

                }
            </div>
            <LogInModal></LogInModal>

        </div>
    );
};

export default Header;
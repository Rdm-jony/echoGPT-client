import React, { useContext } from 'react';
import Header from '../Header/Header';
import { Link, Outlet } from 'react-router-dom';
import { FaHistory, FaHome } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const MainLayout = () => {
    const {setIsText}=useContext(AuthContext)
    return (
        <div>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex lg:mx-40 mx-5">
                    {/* Page content here */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-10">
                        {/* Sidebar content here */}
                        <p className='my-5'>Engagement</p>
                        <Link to="/" onClick={()=>{setIsText(false)}}><li><a> <FaHome /> Home</a></li></Link>
                        <Link to="/history"><li><a> <FaHistory /> History</a></li></Link>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default MainLayout;
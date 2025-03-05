import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { FaHistory } from 'react-icons/fa';
import PageContents from '../PageContents/PageContents';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex mx-40">
                    {/* Page content here */}
                    <PageContents></PageContents>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <p className='my-5'>Engagement</p>
                        <li><a> <FaHistory /> History</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default MainLayout;
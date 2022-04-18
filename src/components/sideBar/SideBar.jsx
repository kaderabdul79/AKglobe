import { LineStyle, Timeline, TrendingUp } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className='sideBar'>
            <div className="sideBarWrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link exact to="/" className="link">
                        <li className="sidebarItem active">
                            <LineStyle className='sidebarIcon' />
                            Home
                        </li>
                        </Link>
                        <Link to="/users" className="link">
                        <li className="sidebarItem">
                            <Timeline className='sidebarIcon' />
                            Users
                        </li>
                        </Link>
                        <Link to="/" className="link">
                        <li className="sidebarItem">
                            <TrendingUp className='sidebarIcon' />
                            User
                        </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Users</h3>
                    <ul className="sidebarList">
                        <Link to="/newproduct" className="link">
                        <li className="sidebarItem">
                            <LineStyle className='sidebarIcon' />
                            newproduct
                        </li>
                        </Link>
                        <Link to="/products" className="link">
                        <li className="sidebarItem">
                            <Timeline className='sidebarIcon' />
                            Product List
                        </li>
                        </Link>
                        <Link to="/product/3" className="link">
                        <li className="sidebarItem">
                            <TrendingUp className='sidebarIcon' />
                            Product
                        </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Products</h3>
                    <ul className="sidebarList">
                        <Link to="/newUser" className="link">
                        <li className="sidebarItem">
                            <LineStyle className='sidebarIcon' />
                            NewUser 
                        </li>
                        </Link>    
                        <li className="sidebarItem">
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarItem">
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
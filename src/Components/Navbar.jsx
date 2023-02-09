import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = [
        {path:'/', title:'Home'},
        {path:'/projects', title:'Projects'},
        {path:'/skills', title:'Skills'},
        {path:'/contacts', title:'Contacts'},
        {path:'/about', title:'About'},
    ]

    const navlinkStyle = ({ isActive }) => ({ 
        color: isActive ? 'blue' : 'black' });

    return (
        <div id='nav-menu'>
            {
                links.length && links.map((el) => {
                    return <NavLink key={el.path} to={el.path} style={navlinkStyle}>{el.title}</NavLink>
                })
            }
        </div>
    )
}

export default Navbar;

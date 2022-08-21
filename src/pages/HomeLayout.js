import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { url } from '../utils'

export default function HomeLayout() {
    return (
        <>
            <nav>
                <NavLink to={url('home')} className={({ isActive }) => isActive && "aktif"}>
                    Anasayfa
                </NavLink>
                <NavLink
                    to={url('home.contact')}
                    style={({ isActive }) => ({
                        background: isActive ? "yellow" : "transparent",
                    })}
                >
                    Iletisim
                </NavLink>
                <NavLink
                    to={url('home.profile')}
                    style={({ isActive }) => ({
                        background: isActive ? "yellow" : "transparent",
                    })}
                >
                    Profil
                </NavLink>
                <NavLink to={url('home.blog')}>Blog</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthRouter } from '../context/AuthContextRouter'

function Profile() {

    const { setUser, user } = useAuthRouter()
    const navigate = useNavigate();
    const logoutHandle = () => {
        setUser(false)
        navigate("/")
    }
    return (
        <>
            <div>Profil Sayfası</div>
            {!user && <Link to='/auth/login'>Giriş yap</Link>}
            {user && <button onClick={logoutHandle}>Çıkış Yap</button>}
        </>
    )
}

export default Profile
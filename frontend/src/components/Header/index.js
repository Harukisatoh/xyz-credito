import React from 'react'
import { Link } from 'react-router-dom';

import { FiLogOut } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";

import { useAuth } from '../../contexts/auth'

import './styles.css'

function Header(props) {
    const { logout } = useAuth()

    function handleLogout(event) {
        event.preventDefault()

        logout()
    }

    return (
        <header className="header">
            {
                props.backButton ? (
                    <Link id="back-icon-header" to="/" className="back-icon-container">
                        <FaArrowLeft size="30" className="back-icon" />
                    </Link>
                ) : <></>
            }
            <h1>{props.title}</h1>
            <Link onClick={handleLogout} to="/" className="logout-icon-container">
                <span>Logout</span>
                <FiLogOut size="26" className="logout-icon" />
            </Link>
        </header>
    )
}

export default Header

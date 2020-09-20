import React from 'react'

import { useAuth } from '../../contexts/auth'

function Home() {
    const { logout } = useAuth()

    function handleLogout(event) {
        event.preventDefault()

        logout()
    }
    
    return(
        <div>
            <h1>Home</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home

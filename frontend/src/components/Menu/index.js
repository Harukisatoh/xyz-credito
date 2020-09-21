import React from 'react'
import { useHistory } from "react-router-dom";

import './styles.css'

function Menu() {
    const history = useHistory()

    function handleSearchButtonClick() {
        history.push('/search')
    }

    function handleInsertButtonClick(ev) {
        history.push('/insert')
    }

    return (
        <div className="menu-container">
            <button onClick={handleSearchButtonClick}>Consultar</button>
            <button onClick={handleInsertButtonClick}>Inserir</button>
        </div>
    )
}

export default Menu

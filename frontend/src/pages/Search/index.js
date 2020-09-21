import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { FaArrowLeft } from "react-icons/fa"

import './styles.css'

function Search() {
    const history = useHistory()
    const [cpfCnpj, setCpfCnpj] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()

        history.push('/results', cpfCnpj)
    }

    return (
        <div className="container">

            <div className="title">
                <Link to="/dashboard" className="back-icon-container">
                    <FaArrowLeft size="30" className="back-icon" />
                </Link>
                <h1>XYZ Crédito</h1>
            </div>

            <div className="form-container">

                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="cpfCnpj">CPF/CNPJ DO DEVEDOR</label>
                    <input
                        id="cpfCnpj"
                        type="cpfCnpj"
                        placeholder="Digite o CPF/CNPJ"
                        value={cpfCnpj}
                        onChange={event => setCpfCnpj(event.target.value)}
                    />
                    <button type="submit">Pesquisar</button>
                </form>
            </div>
        </div>
    )
}

export default Search

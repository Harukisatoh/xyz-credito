import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

import './styles.css'

function Register() {
    const { register } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [cpfCnpj, setCpfCnpj] = useState("")
    
    async function handleSubmit(event) {
        event.preventDefault()

        const body = {
            email,
            password,
            name,
            cpf_cnpj: cpfCnpj
        }

        register(body)
    }

    return(
        <div className="container">

            <div className="title">
                <Link to="/" className="back-icon-container">
                    <FaArrowLeft size="30" className="back-icon" />
                </Link>
                <h1>XYZ Crédito</h1>
            </div>

            <div className="form-container">
                
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Dados da conta</h2>
                    <label htmlFor="email">E-MAIL</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        required
                        />
                    <label htmlFor="password">SENHA</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required
                        />
                    <h2>Dados pessoais</h2>
                    <div className="personal-data-container">
                        <div className="name-input-container">
                            <label htmlFor="name">NOME</label>
                            <input
                                id="name"
                                type="name"
                                placeholder="Digite seu nome"
                                value={name}
                                onChange={event => setName(event.target.value)}
                                required
                            />
                        </div>
                        <div className="cpfCnpj-input-container">
                            <label htmlFor="cpfCnpj">CPF ou CNPJ</label>
                            <input
                                id="cpfCnpj"
                                type="cpfCnpj"
                                placeholder="Digite seu CPF/CNPJ"
                                value={cpfCnpj}
                                onChange={event => setCpfCnpj(event.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Register

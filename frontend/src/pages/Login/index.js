import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../contexts/auth'

import './styles.css'

function Login() {
    const { login } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    async function handleSubmit(event) {
        event.preventDefault()
        
        const body = {
            email,
            password
        }

        login(body)
    }
    
    return(
        <div className="container">
            <div className="form-container">   
                <h1>XYZ Crédito</h1>
                <form className="form" onSubmit={handleSubmit}>
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
                    <button className="btn" type="submit">Entrar</button>
                </form>
                <div className="register-button-container">
                    <Link className="register-button" to="/register">Não possui uma conta? Registre-se</Link>
                </div>
            </div>
        </div>
    )
}

export default Login

import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import * as api from '../../services/api'
import { getCookie } from '../../utils/manageCookie'

import { FaArrowLeft } from "react-icons/fa"

function EditDebt() {
    const history = useHistory()
    const [id, setId] = useState()
    const [name, setName] = useState('')
    const [cpfCnpj, setCpfCnpj] = useState('')
    const [value, setValue] = useState(0)

    useEffect(() => {
        const debt = history.location.state

        setId(debt['id'])
        setName(debt['debtor_name'])
        setCpfCnpj(debt['debtor_cpf_cnpj'])
        setValue(debt['value'])
    }, [history.location.state])

    async function handleSubmit(event) {
        event.preventDefault()

        api.editDebt(getCookie('accessToken'), { value }, id).then(res => {
            if (!res['success']) {
                alert(res['message'] + ' Check console to see the errors')
                console.log(res['errors'])
            } else {
                history.push('/dashboard')
            }
        })
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
                    <label htmlFor="name">NOME DO DEVEDOR</label>
                    <input
                        id="name"
                        type="name"
                        placeholder="Digite o nome"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        disabled
                    />
                    <label htmlFor="cpfCnpj">CPF/CNPJ DO DEVEDOR</label>
                    <input
                        id="cpfCnpj"
                        type="cpfCnpj"
                        placeholder="Digite o CPF/CNPJ"
                        value={cpfCnpj}
                        onChange={event => setCpfCnpj(event.target.value)}
                        disabled
                    />
                    <label htmlFor="value">VALOR DA DÍVIDA</label>
                    <input
                        id="value"
                        type="value"
                        placeholder="Digite o valor"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        required
                    />
                    <button type="submit">Editar débito</button>
                </form>
            </div>
        </div>
    )
}

export default EditDebt

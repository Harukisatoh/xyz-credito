import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { AiOutlineDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'

import {getCookie} from '../../utils/manageCookie'
import * as api from '../../services/api'

import './styles.css'

function DashboardTable() {
    const history = useHistory()
    const [debts, setDebts] = useState([])

    useEffect(() => {
        api.getRegisteredDebtsByUser(getCookie('accessToken')).then(res => {
            setDebts(res['data'])
        })
    }, []);

    function handleDeleteButtonClick(debtId) {
        api.deleteDebt(getCookie('accessToken'), debtId).then(res => {
            if (!res['success']) {
                alert(res['message'] + ' Check console to see the errors')
                console.log(res['errors'])
            } else {
                const newDebts = debts.filter((debt) => {
                    if (Number(debt['id']) !== Number(debtId)) {
                        return debt
                    } else {
                        return null
                    }
                })
                setDebts(newDebts)
            }
        })
    }

    function handleEditButtonClick(debtId) {

        const debt = debts.find(debt => Number(debt['id']) === Number(debtId))

        history.push('/edit', debt)
    }

    return(
        <div id="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Devedor</th>
                        <th>CPF/CNPJ do Devedor</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                {
                    debts.map((debt) => (
                        <tbody key={debt['id']}>
                            <tr>
                                <td>{debt['debtor_name']}</td>
                                <td>{debt['debtor_cpf_cnpj']}</td>
                                <td>{debt['value']}</td>
                                <td>
                                    <div className="buttons-container">
                                        <button value={debt['id']} className="delete-button" onClick={ev => handleDeleteButtonClick(ev.target.value)}>
                                            <span>Excluir</span>
                                            <AiOutlineDelete size="20" />
                                        </button>
                                        <button value={debt['id']} className="edit-button" onClick={ev => handleEditButtonClick(ev.target.value)}>
                                            <span>Editar</span>
                                            <FaRegEdit size="20" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    )
}

export default DashboardTable

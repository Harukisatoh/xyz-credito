import React, {useEffect, useState} from 'react'

import './styles.css'

function ResultsTable(props) {
    const [debts, setDebts] = useState([])

    useEffect(() => {
        setDebts(props.debts)
    }, [props.debts])

    return(
        <div id="results-table-container">
            <table>
                <thead>
                    <tr>
                        <th>Cadastrado por</th>
                        <th>CPF/CNPJ de quem cadastrou</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                {
                    debts ? (debts.map((debt) => (
                        <tbody key={debt['id']}>
                            <tr>
                                <td>{debt['user_name']}</td>
                                <td>{debt['user_cpf_cnpj']}</td>
                                <td>{debt['value']}</td>
                            </tr>
                        </tbody>
                    ))) : <></>
                }
            </table>
        </div>
    )
}

export default ResultsTable

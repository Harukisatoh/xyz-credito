import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import * as api from '../../services/api'

import Header from '../../components/Header'
import ResultsTable from '../../components/ResultsTable'

function Result() {
    const history = useHistory()
    const [searchResult, setSearchResult] = useState([])
    const [headerTitle, setHeaderTitle] = useState('')

    useEffect(() => {
        api.getDebtsFromCpfCnpj(history.location.state).then(res => {
            if(!res['data']) {
                setHeaderTitle('Nenhuma dívida foi encontrada')
            } else {
                setHeaderTitle(`Dívidas de ${res['data']['debtor_name']}`)
                setSearchResult(res['data'])
            }
        })
    }, [history.location.state])

    return (
        <div id="dashboard-container" className="container">
            <Header backButton title={headerTitle} />
            <ResultsTable debts={searchResult['debts']} />
        </div>
    )
}

export default Result

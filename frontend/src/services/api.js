export async function login(body) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(data => data)

        return response

    } catch (error) {
        console.log(error)
        return null
    }
}

export async function register(body) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(data => data)
    
        return response
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function logout(accessToken) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/logout`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(res => res.json())
            .then(data => data)

        return response
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function getDebtsFromCpfCnpj(cpfCnpj) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/debtors?cpf_cnpj=${cpfCnpj}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => data)

        return response
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function getRegisteredDebtsByUser(accessToken) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/debts`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(res => res.json())
            .then(data => data)

        return response
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function insertDebt(accessToken, body) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/debts`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(data => data)

        return response
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function deleteDebt(accessToken, debtId) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/debts/${debtId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(res => res.json())
            .then(data => data)

        return response
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function editDebt(accessToken, body, debtId) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/debts/${debtId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(data => data)

        return response
    } catch (error) {
        console.log(error)
        return null
    }
}

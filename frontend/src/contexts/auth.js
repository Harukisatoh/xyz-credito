import React, {createContext, useState, useEffect, useContext} from 'react'
import * as api from '../services/api'

import { deleteCookie, getCookie, setCookie } from '../utils/manageCookie'

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [signed, setSigned] = useState(false)

    useEffect(() => {
        const token = getCookie('accessToken')

        if (token) {
            setSigned(true)
        }
    }, [])

    async function register(body) {
        const response = await api.register(body)

        if (response['success']) {
            setCookie('accessToken', response['data']['accessToken'], 1)
            setSigned(true)
        } else {
            alert(response['message'] + ' Check console to see the errors')
            console.log(response['errors'])
        }

        return response
    }

    async function login(body) {
        const response = await api.login(body)

        if (response['success']) {
            setCookie('accessToken', response['data'], 1)
            setSigned(true)
        } else {
            alert(response['message'] + ' Check console to see the errors')
            console.log(response['errors'])
        }

        return response
    }

    async function logout() {
        const response = await api.logout(getCookie('accessToken'))

        if(response['success']) {
            deleteCookie('accessToken')
            setSigned(false)
        }

        return response
    }

    return (
        <AuthContext.Provider value={{ signed, setSigned, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)

    return context
}

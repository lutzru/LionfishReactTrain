import { useState } from 'react'

interface LoginPageStateReturn {
    onLoginClick: () => void
    onUserNameChange: (value: string) => void
    onPasswordChange: (value: string) => void
    userName: string
    password: string
    fehlermeldung: string
}

export const useLoginPageState: () => LoginPageStateReturn = () => {
    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [fehlermeldung, setFehlermeldung] = useState('')

    const onLoginClick = () => {
        if (userName === 'asdf' && password === 'geheim') {
            console.log('Login successful!')
            setFehlermeldung('')
        } else {
            setFehlermeldung('ungültiger user/password')
        }
    }

    const onUserNameChange = (value: string) => {
        setUserName(value)
        setFehlermeldung('')
    }

    const onPasswordChange = (value: string) => {
        setPassword(value)
        setFehlermeldung('')
    }
    return {
        onLoginClick,
        onUserNameChange,
        onPasswordChange,
        userName,
        password,
        fehlermeldung,
    }
}

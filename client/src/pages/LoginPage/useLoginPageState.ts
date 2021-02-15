import { Dispatch, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { GeneralState, GeneralStateAction, GeneralStateActions } from '../../store/GeneralState/GeneralState.reducer'

interface LoginPageStateReturn {
    onLoginClick: () => void
    onUserNameChange: (value: string) => void
    onPasswordChange: (value: string) => void
    userName: string
    password: string
    fehlermeldung: string
}

const fakeLogin = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json())
}

const login = (userName: string): GeneralStateActions => {
    return {
        type: GeneralStateAction.SET_USER,
        payload: { token: 'asdfkajdflkjad', user: userName, role: 'Benutzer' },
    }
}

const login2 = (userName: string): ThunkAction<void, GeneralState, unknown, Action<string>> => {
    return (dispatch: Dispatch<GeneralStateActions>) => {
        return fakeLogin().then((todos: any) => {
            console.log(todos.body)
            dispatch(login(todos[0].title))
        })
    }
}

export const useLoginPageState: () => LoginPageStateReturn = () => {
    const dispatch = useDispatch<
        Dispatch<GeneralStateActions | ThunkAction<void, GeneralState, unknown, Action<string>>>
    >()
    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [fehlermeldung, setFehlermeldung] = useState('')

    const history = useHistory()
    const onLoginClick = () => {
        if (password === 'geheim') {
            dispatch(login2(userName))
            setFehlermeldung('')
            history.push('/Dashboard')
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

// dispatch( login2(userName) )

// dispatch({
//     type: GeneralStateAction.SET_USER,
//     payload: { token: 'asdfkajdflkjad', user: userName, role: 'Benutzer' },
// })

// dispatch(login(userName))

// dispatch((dispatch:any) => {
//     return fakeLogin().then(
//         (todos:any) => {dispatch(login(todos[0].title)); console.log('Login successful!')}
//     );
// })

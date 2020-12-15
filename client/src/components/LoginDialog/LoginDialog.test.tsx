import { Button } from '@material-ui/core'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import * as React from 'react'
import LoginDialog, { LoginDialogProps } from './LoginDialog'

jest.mock('react-i18next', () => ({
    useTranslation: (): unknown => ({ t: (key: string): string => key }),
}))
jest.mock('react', () => ({
    // @ts-ignore
    ...jest.requireActual('react'),
    useState: jest.fn(),
}))

const props: LoginDialogProps = {
    userName: 'TestUsername',
    password: 'geheim',
    loginError: 'Du kommst hier ned rein.',
    onClick: jest.fn(),
    onUserNameChange: jest.fn(),
    onPasswordChange: jest.fn(),
}

describe('LoginDialog Component', () => {
    it('should render correctly with enzyme', () => {
        const component = shallow(<LoginDialog {...props} />)

        expect(toJson(component)).toMatchSnapshot()
    })
    it('should handle a click correctly', () => {
        const onClickMock = jest.fn()
        const component = shallow(<LoginDialog {...props} onClick={onClickMock} />)

        component.find(Button).simulate('click', { currentTarget: { value: 0 } })
        expect(onClickMock).toHaveBeenCalledTimes(1)
    })
})

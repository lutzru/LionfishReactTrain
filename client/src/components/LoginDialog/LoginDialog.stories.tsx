import { action } from '@storybook/addon-actions'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import 'utils/ i18n'
import LoginDialog, { LoginDialogProps } from './LoginDialog'

const stories = storiesOf('LoginDialog', module)

const props: LoginDialogProps = {
    userName: 'TestUsername',
    password: 'geheim',
    loginError: 'Du kommst hier ned rein.',
    onClick: action('onClick'),
    onUserNameChange: action('onUserNameChange'),
    onPasswordChange: action('onPasswordChange'),
}

const props2: LoginDialogProps = {
    userName: '',
    password: '',
    onClick: action('onClick'),
    onUserNameChange: action('onUserNameChange'),
    onPasswordChange: action('onPasswordChange'),
}

const props3: LoginDialogProps = {
    userName: 'Lutz',
    password: '',
    onClick: action('onClick'),
    onUserNameChange: action('onUserNameChange'),
    onPasswordChange: action('onPasswordChange'),
}

const props4: LoginDialogProps = {
    userName: 'Lutz',
    password: 'geheim',
    onClick: action('onClick'),
    onUserNameChange: action('onUserNameChange'),
    onPasswordChange: action('onPasswordChange'),
}

stories.add('empty view', () => <LoginDialog {...props2} />)
stories.add('only Username', () => <LoginDialog {...props3} />)
stories.add('Username and password given', () => <LoginDialog {...props4} />)
stories.add('view with error', () => <LoginDialog {...props} />)

//
// Bei einem Interactive view:
// Werte müssen hier drin definiert sein,
// nicht als const vorher. (Damit nobs funktioniert.)
//

stories.addDecorator(withKnobs)

stories.add('interactive view', () => (
    <LoginDialog
        userName={text('Username', '')}
        password={text('Passwort', '')}
        loginError={text('ErrorMessage', '')}
        onClick={action('onClick')}
        onUserNameChange={action('onUserNameChange')}
        onPasswordChange={action('onPasswordChange')}
    />
))

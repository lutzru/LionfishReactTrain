import { storiesOf } from '@storybook/react'
import * as React from 'react'
import 'utils/ i18n'
import Dashboard from './Dashboard'

const stories = storiesOf('Dashboard View', module)

stories.add('default view', () => <Dashboard />)

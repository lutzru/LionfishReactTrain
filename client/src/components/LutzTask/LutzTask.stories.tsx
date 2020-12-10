import { action } from '@storybook/addon-actions'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import 'utils/ i18n'
import LutzTask, { LutzTaskProps } from './LutzTask'

const stories = storiesOf('LutzTask', module)

const props: LutzTaskProps = {
    onTaskDateChanged: action('onTaskDateChanged'),
    taskDate: '11.12.2020',
}

stories.addDecorator(withKnobs)
stories.add('default view', () => <LutzTask {...props} />)

stories.addDecorator(withKnobs)
stories.add('default view (interactive)', () => (
    <LutzTask onTaskDateChanged={action('onTaskDateChanged')} taskDate={text('taskDate', '')} />
))

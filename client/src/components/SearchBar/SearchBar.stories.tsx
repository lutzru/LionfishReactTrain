import * as React from 'react'
import 'utils/ i18n'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import SearchBar, { SearchBarProps } from './SearchBar'

const stories = storiesOf('SearchBar', module)

const props: SearchBarProps = {
    onClick: action('onClick'),
}

stories.addDecorator(withKnobs)
stories.add('default view', () => <SearchBar {...props} />)

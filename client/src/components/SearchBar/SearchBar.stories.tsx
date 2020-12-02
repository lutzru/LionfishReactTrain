import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import 'utils/ i18n'
import SearchBar, { SearchBarProps } from './SearchBar'

const stories = storiesOf('SearchBar', module)

const props: SearchBarProps = {
    onSearchTextChanged: action('onSearchTextChanged'),
    onFilterToggle: action('onFilterToggle'),
    searchText: 'test',
    filterStateOffen: true,
    filterStateInArbeit: false,
    filterStateFertig: true,
}

const props2: SearchBarProps = {
    onSearchTextChanged: action('onSearchTextChanged'),
    onFilterToggle: action('onFilterToggle'),
    searchText: '',
    filterStateOffen: false,
    filterStateInArbeit: false,
    filterStateFertig: false,
}

stories.addDecorator(withKnobs)
stories.add('default view', () => <SearchBar {...props} />)
stories.add('empty view', () => <SearchBar {...props2} />)

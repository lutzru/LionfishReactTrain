import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import 'utils/ i18n'
import SearchBar, { SearchBarProps } from './SearchBar'

const stories = storiesOf('SearchBar', module)

const props: SearchBarProps = {
    setSearchTerm: action('setSearchTerm'),

    setIsOffen: action('setIsOffen'),
    setIsInArbeit: action('setIsInArbeit'),
    setIsFertig: action('setIsFertig'),

    searchTerm: 'test',
    filterStateOffen: true,
    filterStateInArbeit: false,
    filterStateFertig: true,
}

const props2: SearchBarProps = {
    setSearchTerm: action('setSearchTerm'),
    searchTerm: 'test',

    setIsOffen: action('setIsOffen'),
    setIsInArbeit: action('setIsInArbeit'),
    setIsFertig: action('setIsFertig'),

    filterStateOffen: false,
    filterStateInArbeit: false,
    filterStateFertig: false,
}

stories.addDecorator(withKnobs)
stories.add('default view (interactive)', () => (
    <SearchBar
        setSearchTerm={action('setSearchTerm')}
        setIsOffen={action('setIsOffen')}
        setIsInArbeit={action('setIsInArbeit')}
        setIsFertig={action('setIsFertig')}
        searchTerm={text('searchTerm', '')}
        filterStateOffen={boolean('offen', false)}
        filterStateInArbeit={boolean('in Arbeit', false)}
        filterStateFertig={boolean('fertig', false)}
    />
))
stories.add('empty view', () => <SearchBar {...props2} />)

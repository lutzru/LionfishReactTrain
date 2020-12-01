import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import ExampleQueryComponent, {
    ExampleQueryComponentProps,
} from 'components/ExampleQueryComponent/ExampleQueryComponent'
import * as React from 'react'
import 'utils/ i18n'

const stories = storiesOf('Example Component', module)

const props: ExampleQueryComponentProps = {
    loadLastSavedCount: action('loadLastSavedCount'),
    saveCount: action('saveCount'),
}

stories.addDecorator(withKnobs)
stories.add('default view', () => <ExampleQueryComponent {...props} />)

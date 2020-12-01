import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import ExampleComponent, { ExampleComponentProps } from 'components/ExampleComponent/ExampleComponent'
import * as React from 'react'
import 'utils/ i18n'

const stories = storiesOf('Example Component', module)

const props: ExampleComponentProps = {
    currentValue: 0,
    decreaseValue: action('decreaseValue'),
    increaseValue: action('increaseValue'),
}

stories.addDecorator(withKnobs)
stories.add('default view', () => <ExampleComponent {...props} />)

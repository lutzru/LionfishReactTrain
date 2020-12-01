import * as React from 'react'
import 'utils/ i18n'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import {{ pascalCase name }}, { {{ pascalCase name }}Props } from './{{pascalCase name}}'

const stories = storiesOf('{{pascalCase name}}', module)

const props: {{ pascalCase name }}Props = {
    onClick: action('onClick'),
}

stories.addDecorator(withKnobs)
stories.add('default view', () => (
  <{{ pascalCase name }} {...props} />
))

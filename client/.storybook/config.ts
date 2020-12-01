import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, configure } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import '../src/index.css'
import { ModifiedTheme } from '../src/utils/theme'
// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/)

addDecorator(muiTheme([ModifiedTheme]))
addDecorator(withKnobs)
function loadStories() {
    req.keys().forEach(req)
}

configure(loadStories, module)

import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core'
import colors from './colors'
import fontStyles from './fontStyles'

// const breakpoints = createBreakpoints({})
// export const smallMobile = 385
// export const smallestMobile = 360

const theme: Theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            root: {
                '&.ExampleText': {
                    ...fontStyles.ExampleFont,
                    textAlign: 'center',
                },
            },
        },
    },
    palette: {
        primary: {
            main: colors.exampleColor,
        },
    },
    typography: {
        h2: { ...fontStyles.ExampleFont },
    },
})

export const ModifiedTheme = responsiveFontSizes(theme)

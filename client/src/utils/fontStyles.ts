import { TypographyStyleOptions } from '@material-ui/core/styles/createTypography'

interface FontStyle {
    [key: string]: TypographyStyleOptions
}

const fontStyles: FontStyle = {
    ExampleFont: {
        fontFamily: 'Roboto Condensed',
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: '19px',
    },
}

export default fontStyles

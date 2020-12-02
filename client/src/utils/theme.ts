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

    /* 
    MuiAppBar: {
            colorPrimary: {
                backgroundColor: colors.header,
                borderBottom: `5px solid ${colors.midGray}`,
                boxSizing: 'content-box',
                height: '85px',
                [breakpoints.down('xs')]: {
                    height: '158px',
                },
            },
        },
        MuiButton: {
            text: {
                color: colors.white,
                ...fontStyles.ButtonText,
                '&.PortabilityViewAddButton': {
                    ...fontStyles.FormText,
                    color: colors.color1,
                },
                '&.FormButton': {
                    border: `2px solid ${colors.color1}`,
                    borderRadius: '5px',
                    padding: '16px 40px',
                    '&.BackButton': {
                        backgroundColor: colors.white,
                        color: colors.color1,
                    },
                    '&.NextButton': {
                        backgroundColor: colors.color1,
                    },
                    '&.GreenButton': {
                        backgroundColor: colors.green,
                        border: `2px solid ${colors.green}`,
                    },
                    '&$disabled': {
                        backgroundColor: colors.white,
                        border: `2px solid ${colors.lightGray}`,
                        color: colors.lightGray,
                    },
                    '&.OfferOptionButton': {
                        backgroundColor: 'transparent',
                        transition: '250ms',
                        border: `0px`,
                        color: colors.color1,
                        fontFeatureSettings: 'cpsp',
                        textAlign: 'center',
                        zIndex: 2,
                    },
                    '&.OfferOptionButtonActive': {
                        backgroundColor: colors.green,
                        transition: '250ms',
                        border: `0px`,
                        color: colors.white,
                        fontFeatureSettings: 'cpsp',
                        textAlign: 'center',
                        zIndex: 2,
                    },
                },
            },
        },
        MuiButtonBase: {
            root: {
                '&.ProductCard': {
                    width: '100%',
                    borderRadius: '5px',
                    '& .MuiBox-root': {
                        transition: '250ms all',
                    },
                    '& > .MuiGrid-root': {
                        borderRadius: '5px',
                        border: `2px solid ${colors.midGray}`,
                        '&.Selected': {
                            border: `2px solid ${colors.color2}`,
                        },
                    },
                },
                '&.OptionItemComponent': {
                    height: '120px',
                    width: '100%',
                    borderRadius: '5px',
                    '& .MuiBox-root, & .MuiGrid-root': {
                        transition: '250ms all',
                    },
                    '& > .MuiGrid-root': {
                        borderRadius: '5px',
                        border: `2px solid ${colors.midGray}`,
                        height: '100%',
                        '&.Selected': {
                            backgroundColor: colors.color2,
                            border: `2px solid ${colors.color2}`,
                        },
                    },
                },
                '&.ConfigurationItem': {
                    height: '80px',
                    width: '100%',
                    borderRadius: '5px',
                    '& .MuiBox-root, & .MuiGrid-root': {
                        transition: '250ms all',
                    },
                    '& > .MuiGrid-root': {
                        borderRadius: '5px',
                        border: `2px solid ${colors.midGray}`,
                        height: '100%',
                        '&.Selected': {
                            backgroundColor: colors.color2,
                            border: `2px solid ${colors.color2}`,
                        },
                    },
                },
            },
        },
        MuiCollapse: {
            container: {
                '&.ContactDataCollapse': {
                    marginTop: 16,
                },
            },
        },
        MuiDivider: {
            root: {
                '&.CostsTableDivider': {
                    backgroundColor: colors.color1,
                    marginBottom: '10px',
                    marginTop: '10px',
                },
                '&.SaveProgressDivider': {
                    backgroundColor: colors.white,
                    margin: 0,
                },
            },
        },
        MuiFormControlLabel: {
            root: {
                marginLeft: 0,
                color: colors.color1,
                fontSize: 14,
                '& a': {
                    color: colors.color1,
                    textDecoration: 'underline',
                },
                '& .MuiCheckbox-root': {
                    alignSelf: 'start',
                    padding: 4,
                },
            },
            label: {
                marginLeft: 11,
            },
        },
        MuiFormLabel: {
            root: {
                color: colors.darkGray,
                '&.SaveProgressMailInput:': {
                    color: 'teal',
                },
            },
        },
        MuiGrid: {
            root: {
                '&.HeaderComponentGrid': {
                    alignItems: 'flex-start',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'end',
                },
                '&.HeaderComponentHelpLink': {
                    alignItems: 'flex-end',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'end',
                },
                '&.Selected': {
                    '& p, & a': {
                        color: colors.white,
                    },
                },
                '&.ProductCard': {
                    maxWidth: '66%',
                    minWidth: '160px',
                    margin: '0 auto',
                },
                '&.SwitchMonthGrid': {
                    backgroundColor: colors.lightGray,
                    marginTop: '20px',
                    padding: '5px',
                    transition: '250ms',
                    zIndex: 1,
                    '& .MuiGrid-item:not(:first-child)': {
                        marginLeft: '8px',
                    },
                },
            },
            container: {
                '&.OptionItemPriceDescription': {
                    '& .OldPriceContainer': {
                        alignItems: 'flex-end',
                        '& .OldPrice': {
                            '&::after': {
                                backgroundColor: colors.warning,
                            },
                            ...fontStyles.UbersichtText,
                            lineHeight: '18px',
                        },
                    },
                    '& .NewPrice': {
                        ...fontStyles.ProduktboxTextHighlight,
                    },
                    '& .InfoTooltipContainer': {
                        alignItems: 'flex-end',
                        '& svg': {
                            paddingBottom: '2.4px',
                        },
                    },
                    '& .PriceDescriptionText': {
                        ...fontStyles.Sternchentext,
                    },
                    '&.Selected': {
                        // backgroundColor: colors.color2,
                        '& p': {
                            color: colors.white,
                        },
                    },
                },
                '&.CostsTable': {
                    borderRadius: '5px',
                    '& .OldPrice': {
                        '&::after': {
                            backgroundColor: colors.green,
                        },
                        ...fontStyles.PriceDescriptionBasket,
                    },
                    '& .NewPrice': {
                        ...fontStyles.PriceDescriptionBasket,
                    },
                },
                '&.ProductTableRow': {
                    marginBottom: '16px',
                    '& .OldPriceContainer': {
                        alignItems: 'flex-start',
                        '& .OldPrice': {
                            '&::after': {
                                backgroundColor: colors.green,
                                width: 'calc(100% + 8px)',
                                transform: `rotate(-10.7deg) translateY(-0.8rem)`,
                            },
                            ...fontStyles.PriceDescriptionProductRow,
                            lineHeight: '24px',
                        },
                    },
                    '& .NewPriceContainer': {
                        alignItems: 'flex-start',
                        '& .NewPrice': {
                            ...fontStyles.PriceDescriptionProductRow,
                            lineHeight: '24px',
                        },
                    },
                    '& .PriceDescriptionText': {
                        ...fontStyles.Sternchentext,
                        color: colors.midGray,
                    },
                },
                '&.Basket': {
                    '& .CostsTable': {
                        backgroundColor: colors.white,
                        '& .CostsTableTopDivider': {
                            borderBottom: `1px solid ${colors.color1}`,
                            borderTop: `1px solid ${colors.color1}`,
                            opacity: '1 !important',
                            marginBottom: '8px',
                        },
                    },
                    width: '95%',
                },
                '&.Confirmation': {
                    backgroundColor: colors.green,
                    borderRadius: '5px',
                    padding: '24px',
                    '& .CostsTable': {
                        '& p': {
                            color: colors.white,
                        },
                        '& .OldPrice': {
                            '&::after': {
                                backgroundColor: colors.white,
                            },
                        },
                        // '& .CostsTableTopDivider': {
                        //     borderTop: `1px solid ${colors.white}`,
                        //     opacity: '1 !important',
                        //     marginBottom: '8px',
                        // },
                        '& .CostsTableDivider': {
                            backgroundColor: colors.white,
                            marginTop: '20px',
                            marginBottom: '20px',
                        },
                        '& .CostsTableSubtitle': {
                            marginBottom: '18px',
                            marginTop: '-6px',
                        },
                    },
                },
            },
            item: {
                '&.ProductCardTitleContainer': {
                    '& > .MuiBox-root': {
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        '& > .MuiBox-root': {
                            width: '32px',
                            height: '32px',
                            borderRadius: '5px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                    },
                },
                '&.OptionItemTitleContainer': {
                    '& > .MuiBox-root': {
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '&.OptionItemComponentCheckbox': {
                            borderRadius: '5px',
                        },
                        '&.OptionItemComponentRadio': {
                            borderRadius: '16px',
                        },
                        '&.ConfigurationItemRadio': {
                            borderRadius: '16px',
                        },
                        '&.ConfigurationItemCheckbox': {
                            borderRadius: '5px',
                        },
                    },
                },
                '&.ProductCardContentContainer': {
                    '& > .MuiBox-root': {
                        height: 'calc(300px - 32px)',
                        display: 'flex',
                        textAlign: 'end',
                    },
                },
                '&.OptionItemContentContainer': {
                    '& > .MuiBox-root': {
                        display: 'flex',
                        textAlign: 'left',
                    },
                },
            },
        },
        MuiFormHelperText: {
            contained: {
                marginLeft: 0,
            },
        },
        MuiIconButton: {
            root: {
                '&:AddFieldButton': {
                    ...fontStyles.FormText,
                    color: colors.color1,
                },
                '&:hover': {
                    backgroundColor: 'transparent',
                },
                '&.SaveProgress': {
                    transition: 'transform 300ms ease-in-out',
                    '&.SaveProgressOpened': {
                        transform: 'rotate(180deg)',
                    },
                },
            },
        },
        MuiInputBase: {
            root: {
                '&.SaveProgressMailInput': {
                    padding: '18.5px 0px 2.5px 7px',
                    '& input': {
                        padding: 0,
                    },
                },
            },
            input: {
                ...fontStyles.FormText,
            },
        },
        MuiInputLabel: {
            root: {
                fontSize: 18,
                '&$focused': {
                    color: colors.green,
                },
                '&.SaveProgressMailInput': {
                    fontSize: 14,
                },
            },
            formControl: {
                left: '9px',
            },
            outlined: {
                color: colors.darkGray,
                '&.SaveProgressMailInput': {
                    transform: 'translate(0px, 15px) scale(1)',
                },
                '&.MuiInputLabel-shrink': {
                    color: colors.darkGray,
                    transform: 'translate(12px, 10px) scale(0.75)',
                    '&.Mui-focused': {
                        color: colors.green,
                    },
                    '&.SaveProgressMailInput': {
                        transform: 'translate(0px, 6px) scale(0.75)',
                    },
                },
            },
        }, 

*/
})

export const ModifiedTheme = responsiveFontSizes(theme)

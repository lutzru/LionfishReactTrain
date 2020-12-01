// Import locales here:
import i18n from 'i18next'
import Fetch from 'i18next-fetch-backend'
import { initReactI18next } from 'react-i18next'

// add languages to the resources
// const resources = {
//     en: en.en,
//     de: de.de,
// }

i18n.use(Fetch)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: 'de',
        ns: 'translation',
        fallbackLng: 'de',
        preload: ['de', 'en'],
        keySeparator: '.', // we use keys in form messages.welcome
        initImmediate: false,
        interpolation: {
            escapeValue: false, // react already prevents xss
        },
        backend: {
            loadPath: '/customize/i18n/{{lng}}.json',
        },
        // react-i18next options
        react: {
            wait: true,
        },
    })

export default i18n

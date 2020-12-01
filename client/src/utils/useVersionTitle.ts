import { useEffect } from 'react'

export default function useVersionTitle(): void {
    useEffect(
        () => {
            document.title =
                process.env.REACT_APP_NAME +
                ' - ' +
                process.env.REACT_APP_VERSION +
                ' build: ' +
                process.env.REACT_APP_BUILD_NUMBER
        },
        [], // never call again
    )
}

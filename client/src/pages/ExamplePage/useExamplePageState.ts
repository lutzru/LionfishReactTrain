import { useState } from 'react'

interface ExamplePageStateReturn {
    currentValue: number
    // loadValue: (options?: QueryLazyOptions<Record<string, any>> | undefined) => void
    // saveValue: (
    //     options?: MutationFunctionOptions<any, Record<string, any>> | undefined,
    // ) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>
    setCurrentValue: (value: number) => void
}

export const useExamplePageState: () => ExamplePageStateReturn = () => {
    const [currentValue, setCurrentValue] = useState(0)

    // const [saveValue] = useMutation(exampleMutation, {
    //     onCompleted: (result: any): void => {
    //         console.log(result)
    //     },
    //     onError: (error: any): void => {
    //         console.log(error)
    //     },
    // })

    // const [loadValue] = useLazyQuery(exampleQuery, {
    //     fetchPolicy: 'network-only',
    //     onCompleted: (data: any): void => {
    //         if (data && data.exampleQuery) {
    //             setCurrentValue(data.exampleQuery)
    //         }
    //     },
    // })

    return {
        currentValue,
        // loadValue,
        // saveValue,
        setCurrentValue,
    }
}

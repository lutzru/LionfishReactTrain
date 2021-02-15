import { ApolloError, useQuery } from '@apollo/client'
import Anlieferungenquery from 'graphql/queries/Anlieferungen'
import { Anlieferungen } from 'graphqltypes/Anlieferungen'
import { CollectionDeliveryState } from 'graphqltypes/globalTypes'
import { useState } from 'react'

interface DashboardStateReturn {
    loading: boolean
    error?: ApolloError
    data: Anlieferungen
    isOffen: boolean
    setIsOffen: (value: boolean) => void
    isFertig: boolean
    setIsFertig: (value: boolean) => void
    isInArbeit: boolean
    setIsInArbeit: (value: boolean) => void
    searchTerm: string
    setSearchTerm: (value: string) => void
    //currentValue: number
    // loadValue: (options?: QueryLazyOptions<Record<string, any>> | undefined) => void
    // saveValue: (
    //     options?: MutationFunctionOptions<any, Record<string, any>> | undefined,
    // ) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>
    //setCurrentValue: (value: number) => void
}

export const useDashboardState: () => DashboardStateReturn = () => {
    const [isOffen, setIsOffen] = useState<boolean>(false)
    const [isFertig, setIsFertig] = useState<boolean>(false)
    const [isInArbeit, setIsInArbeit] = useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState<string>('')

    const myStates = []
    if (isOffen) myStates.push(CollectionDeliveryState.OFFEN)
    if (isInArbeit) myStates.push(CollectionDeliveryState.IN_ARBEIT)
    if (isFertig) myStates.push(CollectionDeliveryState.FERTIG)

    const { loading, error, data } = useQuery(Anlieferungenquery, {
        variables: { status: myStates, searchTerm: searchTerm },
    })

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
        loading,
        error,
        data,
        // loadValue,
        // saveValue,
        //currentValue,
        //setCurrentValue,
        isOffen,
        setIsOffen,
        isFertig,
        setIsFertig,
        isInArbeit,
        setIsInArbeit,
        searchTerm,
        setSearchTerm,
    }
}

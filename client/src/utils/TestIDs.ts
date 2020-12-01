export interface GetTestIDReturn {
    [key: string]: string | undefined
}

export const getTestID = (id: string): GetTestIDReturn => {
    if (process.env.NODE_ENV === 'production') return {}
    return {
        'data-testid': id,
    }
}

type BASE_INPUTS = 'EXAMPLE_TEXT'

const TestIDs = {
    GET_EXAMPLE: (
        input: BASE_INPUTS | 'EXAMPLE_COUNTER' | 'EXAMPLE_MINUS' | 'EXAMPLE_PLUS' | 'EXAMPLE_SAVE' | 'EXAMPLE_LOAD',
    ): GetTestIDReturn => getTestID('EXAMPLE_PAGE_' + input),
}

export default TestIDs

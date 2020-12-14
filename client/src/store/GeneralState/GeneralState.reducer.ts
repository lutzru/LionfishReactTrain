
// function GeneralStateReducer(state, action) {
//     switch (action.type) {
//         case "SELECT_TOOL":
//             return {
//                 ...state,
//                 selectedTool: action.payload,
//             }
//         }
//     }
// }

export enum GeneralStateAction {
    SET_USER = "SET_USER"
}

export interface GeneralState {
    token?: string,
    loginDate?: Date,
    user?: string,
    role?: string
}

const initialGeneralState: GeneralState = {
    user: '',
    role: ''
}

export type GeneralStateActions =
    | { type: GeneralStateAction.SET_USER; payload: {user: string, role: string, token: string} }
    // | { type: GeneralStateAction.DELETE_POST; payload: number }

function GeneralStateReducer(state: GeneralState = initialGeneralState, action: GeneralStateActions): GeneralState {
    switch (action.type) {
        case GeneralStateAction.SET_USER:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                role: action.payload.role,
            }
        
          default:
            return state
    }
}

export default GeneralStateReducer
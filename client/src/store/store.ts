import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import GeneralStateReducer from './GeneralState/GeneralState.reducer'

export const rootReducer = combineReducers({
    generalState: GeneralStateReducer,
})

// @ts-ignore
const store = createStore(rootReducer, devToolsEnhancer())
export default store
export type AppState = ReturnType<typeof rootReducer>

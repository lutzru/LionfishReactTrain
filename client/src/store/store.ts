import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import GeneralStateReducer from './GeneralState/GeneralState.reducer'

export const rootReducer = combineReducers({
    generalState: GeneralStateReducer,
})

// @ts-ignore
// const store = createStore(rootReducer, devToolsEnhancer())
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
export type AppState = ReturnType<typeof rootReducer>

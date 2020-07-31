import {combineReducers, configureStore} from '@reduxjs/toolkit'
import tasksModule from './todo/module'

const rootReducer = combineReducers({
  tasks: tasksModule.reducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch

export default store
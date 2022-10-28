import { configureStore } from '@reduxjs/toolkit'
import wrenchReduser from './slice'

 const store = configureStore({
  reducer: {
    wrench: wrenchReduser,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
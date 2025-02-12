import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './filtersSlice'
import dataReducer from './dataSlice'

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    data: dataReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

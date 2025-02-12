import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters } from '../types/types'

const initialState: Filters = { username: '', action: '', action_created_at: '' }

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ column: string; value: string }>) => {
      const { column, value } = action.payload
      state[column as keyof typeof state] = value
    },
    clearFilter: (state, action: PayloadAction<string>) => {
      state[action.payload as keyof typeof state] = ''
    },
  },
})

export const { setFilter, clearFilter } = filtersSlice.actions

export default filtersSlice.reducer

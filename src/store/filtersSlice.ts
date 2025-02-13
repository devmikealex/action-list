import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters } from '../types/types'

const initialState: Filters = { username: '', action: '' }

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ column: keyof Filters; value: string }>) => {
      const { column, value } = action.payload
      state[column] = value
    },
    clearFilter: (state, action: PayloadAction<keyof Filters>) => {
      state[action.payload] = ''
    },
  },
})

export const { setFilter, clearFilter } = filtersSlice.actions

export default filtersSlice.reducer

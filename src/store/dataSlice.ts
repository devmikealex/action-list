import { createSlice } from '@reduxjs/toolkit'
import { initialData } from './constants/initialData'

const dataSlice = createSlice({
  name: 'data',
  initialState: initialData,
  reducers: {},
})

export default dataSlice.reducer

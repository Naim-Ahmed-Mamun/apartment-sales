import { configureStore } from '@reduxjs/toolkit'
import PropertySlice from './Slices/PropertySlice'

export const store = configureStore({
  reducer: {
      properties: PropertySlice
  },
})
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProperties = createAsyncThunk(
    'apartment/fetchProperties',
    async () => {
        const response = await fetch('http://localhost:5000/properties')
        return response.data
    }
)

const propertySlice = createSlice({
    name: 'apartment',
    initialState:{
        properties: []
    },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchProperties.fulfilled, (state, action) => {
            // Add user to the state array
            state.properties = action.payload
        })
    },
})

export default propertySlice.extraReducers;
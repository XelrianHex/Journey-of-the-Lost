import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from './initialState'

const buttonState = {
    buttons: initialState.locations.buttons
}

const buttonSlice = createSlice({
    name: "button",
    initialState: buttonState,
    reducers: {}
})

export default buttonSlice.reducer;
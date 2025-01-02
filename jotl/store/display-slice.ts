import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from './initialState'

const displayState = {
    title: initialState.locations.title,
    chapter: initialState.locations.chapter,
    chapterTitle: initialState.locations.chapterTitle,
    text: initialState.locations.text
}

const displaySlice = createSlice({
    name: "display",
    initialState: displayState,
    reducers: {}
})

export default displaySlice.reducer;
import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from './initialState'

const headerState = {
    title: initialState.locations.title,
    xp: initialState.player.playerXp,
    hp: initialState.player.playerHp,
    gp: initialState.player.playerGp
}

const headerSlice = createSlice({
    name: "header",
    initialState: headerState,
    reducers: {}
})

export default headerSlice.reducer;
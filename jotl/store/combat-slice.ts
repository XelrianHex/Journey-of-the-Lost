import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from './initialState'

const CombatState = {
    monsterName: initialState.monster.monsterName,
    monsterHp: initialState.monster.monsterHp,
    playerName: initialState.player.playerName,
    playerHp: initialState.player.playerHp,
    text: initialState.locations.text
}

const combatSlice = createSlice({
    name: "combat",
    initialState: CombatState,
    reducers: {}
})

export default combatSlice.reducer;
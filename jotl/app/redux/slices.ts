import { createSlice } from '@reduxjs/toolkit';  // TODO: import PayloadAction from '@reduxjs/toolkit';
import initialState from './initialState';

const navState = {
  title: initialState.locations.title,
  playerXp: initialState.player.playerXp,
  playerHp: initialState.player.playerHp,
  playerGp: initialState.player.playerGp
}

const navSlice = createSlice({
  name: "nav",
  initialState: navState,
  reducers: {}
});

export const { actions: navActions, reducer: navReducer } = navSlice;

const displaySlice = createSlice({
  name: "display",
  initialState: initialState.locations,
  reducers: {}
});

export const { actions: displayActions, reducer: displayReducer } = displaySlice;

const combatState = {
  monsterName: initialState.monster.monsterName,
  playerHp: initialState.player.playerHp,
  monsterHp: initialState.monster.monsterHp,
  text: initialState.locations.text,
  buttons: initialState.locations.buttons
}

const combatSlice = createSlice({
  name: "combat",
  initialState: combatState,
  reducers: {}
});

export const { actions: combatActions, reducer: combatReducer } = combatSlice;
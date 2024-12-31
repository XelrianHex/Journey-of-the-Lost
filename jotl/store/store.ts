import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import headerReducer from "./header-slice";

const makeStore = () => configureStore({
    reducer: {
        header: headerReducer,
    }
})

export const wrapper = createWrapper(makeStore);
export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
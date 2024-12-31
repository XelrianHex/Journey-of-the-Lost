import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./header-slice";

const makeStore = () => configureStore({
    reducer: {
        header: headerReducer,
    }
});

export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
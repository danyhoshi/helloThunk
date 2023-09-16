import { configureStore } from "@reduxjs/toolkit";
import  pokeReducer from "./features/pokeSlice";

export const store = configureStore({
    reducer: {
        poke: pokeReducer,
    },
})

// store.subscribe(() => {
//     console.log('Estado cambio')
// })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
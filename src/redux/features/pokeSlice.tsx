import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

const fetchPokeById = createAsyncThunk (
    'poke/fetchById',
    async (pokeId: string, thunkApi) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`) 
        const data = await response.json();
        return data.forms[0].name  
    }
  )

   interface pokeState {
    // loading: boolean,
    name: null | string,
    // error: null | string
   }

  const initialState : pokeState = {
      // loading: false,
      name: "",
      // error: null
  }

export const pokeSlice = createSlice({
    name: "poke", 
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchPokeById.fulfilled, (state, action: PayloadAction<string>) => {
          // const  name  = action.payload;
          // state.loading = false;
           console.log(action.payload)
            state.name = action.payload;
        })
      
      },
})

export { fetchPokeById } 
//export { fetchPokeById } = pokeSlice.actions
export default pokeSlice.reducer; // exportamos el reducer
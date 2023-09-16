import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

const fetchPokeById = createAsyncThunk (
    'poke/fetchById',
    async (pokeId: string, thunkApi) => {
      const name = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((response) => (response.ok ? response.json() : Promise.reject(response)))
      .then((data) => {
        return data.forms[0].name
       // return place;
      })
      .catch((err) => {
        const message = err.statusText || 'Ocurrio un error';
        return thunkApi.rejectWithValue(message)
      });
      return name
    
        // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`) 
        // const data = await response.json();
        // return data.forms[0].name
 
      
      // catch(error: any)
      // {
      //   return thunkApi.rejectWithValue(error.vale)
      // }
      
    }
  )

   interface pokeState {
    loading: boolean,
    name: null | string,
    error: null | string
   }

  const initialState : pokeState = {
      loading: false,
      name: "",
      error: null
  }

export const pokeSlice = createSlice({
    name: "poke", 
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokeById.pending, (state, action) => {
          console.log("loading")
          state.loading = true
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchPokeById.fulfilled, (state, action: PayloadAction<string>) => {
          // const  name  = action.payload;
          state.loading = false;
           console.log(action.payload)
            state.name = action.payload;
        })
        builder.addCase(fetchPokeById.rejected, (state, action: PayloadAction<any>) => {
          state.loading = false
          state.error = action.payload;
        })
      },
})

export { fetchPokeById } 
//export { fetchPokeById } = pokeSlice.actions
export default pokeSlice.reducer; // exportamos el reducer
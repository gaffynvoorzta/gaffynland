import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fruitApi from "../../api/fruit";

export const getFruit = createAsyncThunk("fruit/getFruit", fruitApi.getFruit);

export const fruitSlice = createSlice({
  name: "fruit",
  initialState: {
    fruit: "",
    genus: "",
    family: "",
    fruit2: "",
    genus2: "",
    family2: "",
    fruit3: "",
    genus3: "",
    family3: "",
  },
  extraReducers: {
    [getFruit.fulfilled]: (state, action) => {
      state.fruit = action.payload.fruit;
      state.genus = action.payload.genus;
      state.family = action.payload.family;
      state.fruit2 = action.payload.fruit2;
      state.genus2 = action.payload.genus2;
      state.family2 = action.payload.family2;
      state.fruit3 = action.payload.fruit3;
      state.genus3 = action.payload.genus3;
      state.family3 = action.payload.family3;
    }
  }
});

export default fruitSlice.reducer;
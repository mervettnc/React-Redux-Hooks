import { createReducer } from "@reduxjs/toolkit";
import { creators } from "../actions/counter.action";
import { createAction } from "@reduxjs/toolkit"


//const increment = createAction('counter/increment')
const initialState = { value: 0 };

const counter = createReducer(initialState, (builder) => {
  builder
  .addCase(creators.increment, (state, action) => {
    state.value += action.payload
  })
  .addDefaultCase((state, action) => {
    console.log("test", action)
  })
});

export default counter

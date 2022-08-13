import { configureStore } from "@reduxjs/toolkit";
import { customReducer,LoginReducer } from "./Reducers";

const store=configureStore({
reducer: {
    myCustomReducer: customReducer, //can use any name, here I used myCustomReducer for this one; Also you can add as many reducers as you want

    myLoginReducer: LoginReducer, 
},
});

export default store;

//In redux we used combine Reducers as parameter in createStore(combineReducers) instead but it's deprecated now
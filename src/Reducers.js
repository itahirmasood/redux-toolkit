import {createReducer} from "@reduxjs/toolkit";

const initialState={
    num:0,
};
export const customReducer= createReducer(initialState, {
increment:(state,action)=>{ //here you can skip action as it's not used
    state.num+=1;

},
incrementByValue:(state,action)=>{
    state.num+=action.payload; //in payload we get data/value then adding that in the current state

},

decrement:(state)=>{ //action skipped as was not required
    state.num-=1;

},
});

const initializeLogin ={
    isLoggedIn:false,
}
export const LoginReducer= createReducer(initializeLogin, {
    sign_in:(state,action)=>{
        state.isLoggedIn= true;
    },

    sign_out:(state,action)=>{
        state.isLoggedIn= false;
    },
    
})

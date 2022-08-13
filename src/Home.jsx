import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
    const dispatch = useDispatch(); //declare inside the component, Dispatches action to reducer to perform action and modify value

    const value= useSelector((state)=>state.myCustomReducer.num); //to get value; you can also use const {num}= useSelector(()=>state.myCustomReducer);
    const addBtn=()=>{
        dispatch({
            type:"increment"
        });
    };

    const decBtn=()=>{
        dispatch({
            type:"decrement"
        });
    };
    
    const incByValue=()=>{
        dispatch({
            type:"incrementByValue",
            payload:5,
        });
    };

    const signin=()=>{
        dispatch({
            type:"sign_in"
        });
    };
    const signout=()=>{
        dispatch({
            type:"sign_out"
        });
    };

    const login= useSelector((state)=>state.myLoginReducer.isLoggedIn);
  return (
    <div>
        <h1>React Redux Toolkit</h1>
        <h3>Value: {value}</h3>
        <button onClick={addBtn}>Increment</button>
        <button onClick={decBtn}>Decrement</button>
        <button onClick={incByValue}>Increment by 5</button>

        <button onClick={signin}>Login</button>
        <button onClick={signout}>Logout</button>
        {login? <h3>You're Logged in</h3> :<h3>You're Logged OUT</h3> }


    </div>
  )
}

export default Home
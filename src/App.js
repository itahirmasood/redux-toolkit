
import './App.css';
import Home from './Home';

import {useSelector } from 'react-redux';

function App() {

  const value= useSelector((state)=>state.myCustomReducer.num);

  return (
    <div className="App">
        <Home/>
        
        <h5>Accessing same value in another component</h5>
        <h6>Value in App component is {value}</h6>

    </div>
  );
}

export default App;


// In Redux we had
//Store - Globalized State stored at one place
//Action - Basically mean what you want to do. i.e. Increment or Decrement 
//Reducer - Check what to do as per action & modify store based on the type of action
//Dispatch - Dispatch the action to reducer for what to do

//But in Redux toolkit it's all simplified that's why redux toolkit is preferred over redux.



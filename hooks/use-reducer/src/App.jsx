
import React,{useReducer } from "react";
import './App.css'
function App(){

    const initialState ={count:0};

    function reducer(state,action){

      switch(action.type){
        case 'increase' : {
          return {count:state.count+1}
        }

        case 'decrease' : {
          return {count:state.count-1}
        }

        default :{
          return state;
        }
        
      }
      
    };
    const[state,dispatch]= useReducer(reducer,initialState);

  return(
    <>
    <h1>{state.count}</h1>
    <button onClick={()=>dispatch({type:"increase"})}>+1</button>
    <button onClick={()=>dispatch({type:'decrease'})}>-1</button>
    
    </>
  )
}

export default App;

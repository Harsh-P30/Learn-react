## useReducer Hook
- **useReducer helps manage complex state logic in React using a reducer function, like a mini Redux.**
- useReducer is a React Hook used to manage more complex state logic in your component — especially when you have multiple related state values or when state updates depend on the previous state.
- It works like a mini version of Redux inside your component.

```bash
   const [state, dispatch] = useReducer(reducerFunction, initialState);
```

- state: your current state (just like from useState).
- dispatch: a function you call to update the state.
- reducerFunction: decides how to update the state.
- initialState: the starting value of your state.
  
**Why use useReducer**
- it helps to cleaner and more organized than useState calls.
- it helps to despatch to handle multiple actions like in Redux.
- it helpful when state depends on previous state.
  



### myNotes on useReducer Hook
- useReducer is similar to useState, But instead of providing state and setter function. it provides state and dispatch function.
- The useReducer Hook accepts two arguments
  - Reducer function
  - Initial State
- and it returns the dispatch  method and current state.
  
- The reducer function specifies how the state gets updated.

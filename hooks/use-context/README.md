# useContext Hooks
- useContext is a React Hook that lets you use data from a context anywhere in your component tree without passing props manually at every level.
- Think of it like a shared box of data 📦 that any component can access — no matter how deep it is.
- We use useContext to access shared data (like theme or user info) across components without passing props manually at every level.
- Basically 
  

    **When to use useContext hook**
    - User authentication info
    - theme(light/dark)
    - language/licalization
    - cart in e-commerce
    - Toggle state(sidebar open/close, modal visibility)
  
## myNotes on useContext Hooks
  - useContext is a React Hook that lets you share data (like username, theme, or settings) between components without passing it manually through props at every level.
  - With useContext, you can store the data in a central place (called a Context) and then any component can read it directly.*No more reprating props*
  - useContext is a React Hook that allows you access data from any component without explicitly passing it down through props at every level.
  - **useContext is used to manage Global data in the React App.**


  **you can pass multiple data by wrapping into object{} and array[], for accessing data you can use destructuring;
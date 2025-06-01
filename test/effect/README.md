# useEffect
- useEffect is a React Hook that lets you synchronize a component with an external system.

```bash
useEffect(setup, dependencies?)
```

```bash
useEffect(() => {   // Run only one time 
    alert("Hey welcome");
  },[]) // [] -> dependencies
```
**📌 Rules of useEffect**
- Runs after the render is committed to the DOM.
- Can have multiple useEffect hooks in one component.
- Use the cleanup function to clear timers, subscriptions, event listeners, etc.
- Provide a dependency array ([]) to control when it runs.
  

**Usage**
- Connecting to an external system.
- Wrapping Effects in custom Hooks.
- Controlling a non-React widget.
- Fetching data with Effects.
- Specifying reactive dependencies.
- Updating state based on previous state from an Effect.
- Removing unnecessary object dependencies.
- Removing unnecessary function dependencies.
- Reading the latest props and state from an Effect.
- Displaying different content on the server and the client.



## My notes on useEffect

    useEffect hooks help perform side effect in our component.

    Basically help us to deside lifecycle of our component.



**when we use useEffect without any dependency its runs infinite**

- empty array **[]** so it call callback function only one time. 
- **[input]** when even *input*(variable) change, it will call callback function again.also you can add multiple variable *input -> from App.jsx and it is a variable*
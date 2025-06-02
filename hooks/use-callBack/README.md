
# useCallback Hook
- **useCallback** is a hook that helps React remember a function, so it doesn’t re-create it every time your component updates.
- **It's like telling React:**
    - Hey! ✋ This function is the same as last time. Don’t build a new one unless something important changes.
- basically it is a remember function, so React doesn't build them again every time 

```bash
const myFunc = useCallback(() => {...}, [dependencies]);
```

## myNotes on useCallback Hook
- useCallback is a react hook that lets you cache a function defination between re-renders.
- it means,when we use useCallback hook, it doesn't create multiple instance of same function when re-render happens.
- Instead of creating new instance of the function, it provides the cached function on re-render of the component. 
  
  **When NOT to use useCallback**
  - if you're not passing the function to children.
  - if the function is cheap(fast to create)
  - if you just want to use a regular function inside a component.
  - *if your app work fine without useCallback, don't rush to use it. it's a tool for optimization, not a must-have every time.*
  
  **why and when we use useCallback hook**
  - Function is passed to child
  - Function is expensive to recreate.
  - You care about performance.

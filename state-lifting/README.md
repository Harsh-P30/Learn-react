

# State Lifting
- State Lifting means moving state from a child component to its parent component so that multiple child components can share and access that state.
  
  
**📦 Why Do We Lift State?**
- Imagine two components need to communicate or share data.
- You can’t directly send data from one child to another — so we lift the shared state up to their common parent.

- This way, the parent controls the data and passes it down to both children via props.

**State Lifting is moving state up to the nearest common parent so that multiple components can share and sync the same data.**

**🧠 Why Use It?**
- When two or more components need the same data.
- So they can see changes instantly.
- Helps them talk through the parent.

## myNotes on State Lifting 
- Basically in normal context we can pass data from parents to child but when we have to pass data from child to parents we use a method name as **State Lifting**.


## UseState
- useState is a React Hook that lets you add state (data that can change) to a **functional component**.
  
- State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.

- To add state to a component, use one of these Hooks:

- useState declares a state variable that you can update directly.
- useReducer declares a state variable with the update logic inside a reducer function.
- useState is a react hook, which creates an **state variable**. which helps us to track state in components & updates the user interface when state changes.
- 

```bash
function ImageGallery() {
  const [index, setIndex] = useState(0);
  // ...
```

- const [state, setState] = useState(initialValue);
**Every time you call setState, React:**
- updates the value
- re-renders the component
- useState lets you add and manage data (state) in React functional components.
  <br>
  <br>
- Syntax → const [value, setValue] = useState(initialValue)
- You update the value using setValue, and React re-renders the component.
- Example → counter, form input, toggle, etc.
- It replaces the need for state in class components.

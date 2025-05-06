<h1>Comonents</h1>
 Components in React are reusable building blocks that control what you see in the UI.A component is a JavaScript function (or class) that returns React elements (JSX) to show something on the screen. <br>
 <h3>🛠️ Types of components</h3>
<ul>

<li>Functional components → most common today (function MyComponent()) </li> 
<li>Class components → older style (class MyComponent extends React.Component)</li> 
</ul>

<h3>🔥 Why we use components: </h3> <br>
✅ Reuse UI <br>
✅ Keep code organized <br>
✅ Split big apps into small, testable parts <br>
✅ Pass data using props<br>
✅ Manage internal state (with hooks like useState) <br>

<b>a React component, start its name with an uppercase letter.</b>


## component lifecycle in Class Method
- In React, components have a lifecycle that consists of different phases. Each phase has a set of lifecycle methods that are called at specific points in the component's lifecycle. These methods allow you to control the component's behavior and perform specific actions at different stages of its lifecycle.
- In React, a component's lifecycle consists of three main phases: **mounting, updating, and unmounting**. These phases allow developers to run specific code at key moments, such as when the component is created, updated, or removed.
  
```bash
https://www.freecodecamp.org/news/react-component-lifecycle-methods/
```


# Component Mounting Phase
- The mounting phase refers to the period when a component is being created and inserted into the DOM.
- During this phase, several lifecycle methods are invoked by React to enable the developer to configure the component, set up any necessary state or event listeners, and perform other initialization tasks.
# The mounting phase has three main lifecycle methods that are called in order: constructor(), render(), componentDidMount()

**The constructor() lifecycle method**
**constructor() → setup state, bind methods**
The constructor() method is called when the component is first created. You use it to initialize the component's state and bind methods to the component's instance. 
syntax of creating constructor
```bash
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // ...
}
```

**The render() lifecycle method**
**render() → returns JSX**
The render() method is responsible for generating the component's virtual DOM representation based on its current props and state. It is called every time the component needs to be re-rendered, either because its props or state have changed, or because a parent component has been re-rendered.
```bash
render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
```
**The componentDidMount() lifecycle method**
**componentDidMount() → runs once after render → good for API calls**
The componentDidMount() method is called once the component has been mounted into the DOM. It is typically used to set up any necessary event listeners or timers, perform any necessary API calls or data fetching, and perform other initialization tasks that require access to the browser's DOM API.

# Component Updating Phase
This phase occurs when a component's props or state changes, and the component needs to be updated in the DOM.
**shouldComponentUpdate() → controls re-render (default: true)**
**The shouldComponentUpdate() lifecycle method**
The shouldComponentUpdate() method is called before a component is updated. It takes two arguments: nextProps and nextState. This method returns a boolean value that determines whether the component should update or not. If this method returns true, the component will update, and if it returns false, the component will not update.

**The componentWillUpdate() lifecycle method**
- componentWillUpdate() is a lifecycle method in React that gets called just before a component's update cycle starts. It receives the next prop and state as arguments and allows you to perform any necessary actions before the component updates.

- But this method is not recommended for updating the state, as it can cause an infinite loop of rendering. It is primarily used for tasks such as making API calls, updating the DOM, or preparing the component to receive new data. componentWillUpdate() is often used in conjunction with componentDidUpdate() to handle component updates.

**The componentDidUpdate lifecycle method**
The componentDidUpdate() method is a lifecycle method in React that is called after a component has been updated and re-rendered. It is useful for performing side effects or additional operations when the component's props or state have changed.

# Component Unmounting Phase

- The unmounting phase refers to the lifecycle stage when a component is being removed from the DOM (Document Object Model) and is no longer rendered or accessible.

- During this phase, React performs a series of cleanup operations to ensure that the component and its associated resources are properly disposed of.

- The unmounting phase is the last stage in the lifecycle of a React component and occurs when the component is being removed from the DOM tree.

- This can happen for various reasons, such as when the component is no longer needed, the parent component is re-rendered without including the child component, or when the application is navigating to a different page or view.

**The componentWillUnmount() lifecycle method**
- componentWillUnmount(): This method is called just before the component is removed from the DOM. It allows you to perform any necessary cleanup, such as canceling timers, removing event listeners, or clearing any data structures that were set up during the mounting phase.
- After componentWillUnmount() is called, the component is removed from the DOM and all of its state and props are destroyed.


## ⚛️ React Functional Component Lifecycle (with useEffect)

# ✅ Mounting (component is added to DOM)
- → Runs only once on initial render
```bash
useEffect(() => {
  console.log("Component mounted");
}, []);
```
# ✅ Updating (state or props change)
- → Runs every time the specified dependencies change
```bash
useEffect(() => {
  console.log("Count updated");
}, [count]);
```
# ✅ Unmounting (component is removed from DOM)
- → Cleanup function runs before unmount
```bash
useEffect(() => {
  return () => {
    console.log("Component will unmount");
  };
}, []);
```
**📌 Rules of useEffect**
- Runs after the render is committed to the DOM.
- Can have multiple useEffect hooks in one component.
- Use the cleanup function to clear timers, subscriptions, event listeners, etc.
- Provide a dependency array ([]) to control when it runs.
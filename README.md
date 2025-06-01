# React Introduction. 
Learning react from beginning. 

## What is React

- React is a JavaScript library to build dynamic and interactive user interfaces.
- Developed by facebook in 2011. 
- React only run on browser not work on server and client.
- Used to create single page website. 
- React is based on Declarative programming. basically you define the target UI state and then react figures out how to reach that state. But in JavaScript you have to write code to reach that desired state and JavaScript is based on Imperative Programming.

## React Cdn

```bash
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
```
```bash
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

## Babel
Babel is a JavaScript compiler. it convert new JavaScript into older JavaScript so it can support in all the browser and also convert JSX into Js. 

## Babel Cdn

```bash
    <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
```
after attaching cdn 
<!-- Your custom script here -->
add into your script type->

```bash
    <script src="script.js" type="text/babel">
```
    Don't forget to use react cdn also

## Babel by npm</h5>

```bash
https://youtu.be/_ze46JgZpd4?si=H2J0p-lEC938Wec2 
https://youtu.be/zVWKtnEm4fk?si=0HdZOZvjK6G6XnB7

```


<h1>Create react by using create-react-app</h1>
it is too heavy its download everything related to react
- npx create-react-app <app-name>
- cd <app-name>
- npm run start
- npm run build // to build folder


# Bundler
A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser. A fantastic feature of a bundler is that it generates a dependency graph as it traverses your first code files. This implies that beginning with the entry point you specified, the module bundler keeps track of both your source files’ dependencies and third-party dependencies. This dependency graph guarantees that all source and associated code files are kept up to date and error-free. .
- Combines all .js / .jsx files .
- Converts JSX to plain JS (via Babel) .
- Transpiles modern JS (ES6+) to older JS (for browser support) .
- Optimizes (minifies) code for production .
- Optionally processes CSS, images, fonts, etc. 
  
**Steps to use a bundler.**
- Choose one (Webpack, Vite, Parcel, etc.).
- Install it + its loaders/plugins .
- Set up babel.config.js or .babelrc
- Set up bundler config (webpack.config.js, vite.config.js) .
- Add npm scripts .
- Run npm start or npm run build .

## Types of bundler

## Webpack
Webpack is a module bundler — it takes all your project files (JavaScript, CSS, images, fonts, etc.), processes them, and bundles them into one or more optimized files that browsers can understand.

- Combines (bundles) your JS, CSS, images  .
- Transforms JSX → JS (via Babel)   .
- Transpiles ES6+ → ES5 (for browser support)   .
- Optimizes the final output (minifies, tree-shakes unused code)  .
- Provides a dev server with hot module reload (HMR)  .

**🔨 How does Webpack work?**
Webpack works with these core concepts:

Entry
→ The main file where Webpack starts the bundling process (usually src/index.js).

Output
→ Where Webpack puts the final bundled file(s) (usually in a dist/ folder).

Loaders
→ Help Webpack handle non-JS files (like .jsx, .css, .png).
Example: babel-loader for JSX/ES6, css-loader for CSS.

Plugins
→ Extend Webpack’s power (like generating HTML, cleaning the output folder, optimizing assets).
Example: HtmlWebpackPlugin, CleanWebpackPlugin.

Mode
→ Either development (with source maps, no minification) or production (minified, optimized).

📦 Typical React + Webpack setup:- 
- entry: ./src/index.js
- output: ./dist/bundle.js
- loaders: babel-loader (JSX + ES6 → JS), css-loader + style-loader (CSS import support)
- plugins: HtmlWebpackPlugin (injects your bundle into HTML)


## 💥 What is Parcel? 

Parcel is a zero-config bundler — it bundles your JavaScript, JSX, CSS, images, fonts, and more, with almost no manual configuration.

- Zero config → no need for webpack.config.js .
- Built-in Babel, TypeScript, PostCSS support .
- Hot Module Replacement (HMR) → updates the browser without full reload .
- Automatic code splitting & optimization .
- Fast dev server + optimized production build .

**🔥 Why do React devs like Parcel?**
- It just works — you can start coding immediately.
- You don’t need to install Babel or Webpack manually — Parcel detects JSX and transpiles it.
- It handles assets automatically (images, CSS, fonts).
- It’s great for small to medium React projects or prototypes.

✅ How to set up React + Parcel.
Here’s a step-by-step guide:-> 

1️⃣ Create a new project
```bash
    mkdir my-parcel-app
    cd my-parcel-app
    npm init -y
```

2️⃣ Install React + ReactDOM
```bash
    npm install react react-dom
```
3️⃣ Install Parcel
```bash
npm install --save-dev parcel
```
4️⃣ Create project files

    /my-parcel-app
    /src
        index.jsx
        index.html
        package.json


Update package.json scripts

5️⃣
    "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
    }


Behind the scenes, Parcel uses Babel to handle modern JavaScript and JSX/TSX syntax.
{
    Steps i used create a folder
```bash
        npm init -y
        create html and js file
        npm install react react-dom
        npm i --save-dev 
```
}




## 💥 What is Vite? </h4>

Vite (pronounced like “vite” in French = “fast”) is a next-generation frontend build tool that gives you:

- ultra-fast dev server (instant startup).
- lightning-fast hot module replacement (HMR).
- ES module–based architecture.
- out-of-the-box React + JSX support.
- optimized production builds (using Rollup under the hood).

It was created by Evan You (the creator of Vue) and is now popular across React, Vue, Svelte, and even Vanilla JS projects.

**🚀 Why React devs love Vite**
- Instant dev server start → no matter how big your project
- Fast HMR → save a file, and the update appears instantly in the browser
- No config needed → React template works out of the box
- Built-in JSX + TypeScript support → no Babel setup required
- Optimized production builds → minified, tree-shaken, ready to deploy

**How to set up React + Vite.**
    Here’s your step-by-step:

1️⃣ Create a new project
```bash
    npm create vite@latest my-vite-app
```
    It will prompt you:
        ✔ Project name: my-vite-app
        ✔ Select a framework: React
        ✔ Select a variant: JavaScript
2️⃣ Go into your project folder
```bash
    cd my-vite-app
```
3️⃣ Install dependencies
```bash
    npm install
```
4️⃣ Run the dev server
```bash
    npm run dev
```
    You’ll see:
    VITE vX.X.X  ready in XX ms
  ➜  Local: 
```bash
http://localhost:5173/
```
5️⃣ Project structure

    /my-vite-app
    /public
    /src
        App.jsx
        main.jsx
    index.html
    package.json
    vite.config.js

 

# Virtual DOM, Fibre and reconciliation</h1>

reference ->
```bash 
 https://github.com/acdlite/react-fiber-architecture
```



# TailwindCss 4.0 in Vite

create react app by vite.
go to -> 
```bash
https://tailwindcss.com/docs/installation/using-vite 
```

bottom of installation tag you get a "using vite" named tag.   
Install Tailwind CSS  Terminal ->
```bash
npm install tailwindcss @tailwindcss/vite 
```
Configure the Vite plugin.  
open "vite.config.ts" file.  
replace with  ->   
```bash  
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
plugins: [
    react(),
    tailwindcss()
],
})
```


import into css file (index.css) -> 
```bash
     @import "tailwindcss"; 
```

now you can run-> <br> 
```bash
    npm run dev 
```


# Components
 Components in React are reusable building blocks that control what you see in the UI.A component is a JavaScript function (or class) that returns React elements (JSX) to show something on the screen.

## 🛠️ Types of components 

- Functional components → most common today (function MyComponent())
- Class components → older style (class MyComponent extends React.Component)


## 🔥 Why we use components:
- Reuse UI
- Keep code organized <br>
- Split big apps into small, testable parts <br>
- Pass data using props<br>
- Manage internal state (with hooks like useState) <br>



<h1>Comonents</h1>
 Components in React are reusable building blocks that control what you see in the UI.A component is a JavaScript function (or class) that returns React elements (JSX) to show something on the screen. <br>
 <h3>🛠️ Types of components</h3>
<ul>

<li>Functional components → most common today (function MyComponent()) </li> 
<li>Class components → older style (class MyComponent extends React.Component)</li> 
</ul>

<h3>🔥 Why we use components: </h3>

- Reuse UI.  
- Keep code organized.  
- Split big apps into small, testable parts . 
- Pass data using props. 
- Manage internal state (with hooks like useState) . 

<b>a React component, start its name with an uppercase letter.</b>


# component lifecycle in Class Method
- In React, components have a lifecycle that consists of different phases. Each phase has a set of lifecycle methods that are called at specific points in the component's lifecycle. These methods allow you to control the component's behavior and perform specific actions at different stages of its lifecycle.
- In React, a component's lifecycle consists of three main phases: **mounting, updating, and unmounting**. These phases allow developers to run specific code at key moments, such as when the component is created, updated, or removed.
  
```bash
https://www.freecodecamp.org/news/react-component-lifecycle-methods/
```


## Component Mounting Phase
- The mounting phase refers to the period when a component is being created and inserted into the DOM.
- During this phase, several lifecycle methods are invoked by React to enable the developer to configure the component, set up any necessary state or event listeners, and perform other initialization tasks.
## The mounting phase has three main lifecycle methods that are called in order: constructor(), render(), componentDidMount()

**The constructor() lifecycle method**
**constructor() → setup state, bind methods**
The constructor() method is called when the component is first created. You use it to initialize the component's state and bind methods to the component's instance.  

syntax of creating constructor.  

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


## Component Updating Phase
This phase occurs when a component's props or state changes, and the component needs to be updated in the DOM.
**shouldComponentUpdate() → controls re-render (default: true)**
**The shouldComponentUpdate() lifecycle method**
The shouldComponentUpdate() method is called before a component is updated. It takes two arguments: nextProps and nextState. This method returns a boolean value that determines whether the component should update or not. If this method returns true, the component will update, and if it returns false, the component will not update.  

**The componentWillUpdate() lifecycle method**
- componentWillUpdate() is a lifecycle method in React that gets called just before a component's update cycle starts. It receives the next prop and state as arguments and allows you to perform any necessary actions before the component updates.

- But this method is not recommended for updating the state, as it can cause an infinite loop of rendering. It is primarily used for tasks such as making API calls, updating the DOM, or preparing the component to receive new data. componentWillUpdate() is often used in conjunction with componentDidUpdate() to handle component updates.

**The componentDidUpdate lifecycle method**
The componentDidUpdate() method is a lifecycle method in React that is called after a component has been updated and re-rendered. It is useful for performing side effects or additional operations when the component's props or state have changed.

## Component Unmounting Phase

- The unmounting phase refers to the lifecycle stage when a component is being removed from the DOM (Document Object Model) and is no longer rendered or accessible.

- During this phase, React performs a series of cleanup operations to ensure that the component and its associated resources are properly disposed of.

- The unmounting phase is the last stage in the lifecycle of a React component and occurs when the component is being removed from the DOM tree.

- This can happen for various reasons, such as when the component is no longer needed, the parent component is re-rendered without including the child component, or when the application is navigating to a different page or view.

**The componentWillUnmount() lifecycle method**
- componentWillUnmount(): This method is called just before the component is removed from the DOM. It allows you to perform any necessary cleanup, such as canceling timers, removing event listeners, or clearing any data structures that were set up during the mounting phase.
- After componentWillUnmount() is called, the component is removed from the DOM and all of its state and props are destroyed.


# ⚛️ React Functional Component Lifecycle (with useEffect)

## ✅ Mounting (component is added to DOM)
- → Runs only once on initial render
```bash
useEffect(() => {
  console.log("Component mounted");
}, []);
```
## ✅ Updating (state or props change)
- → Runs every time the specified dependencies change
```bash
useEffect(() => {
  console.log("Count updated");
}, [count]);
```
## ✅ Unmounting (component is removed from DOM)
- → Cleanup function runs before unmount
```bash
useEffect(() => {
  return () => {
    console.log("Component will unmount");
  };
}, []);
```

# 💥 What are props?
## "props" is default name;
- Props(short for properties) are inputs you pass from a parent component to a child component in React.
- They let you send data,values or functions into components so they can behave dynamically.
- Props are like arguments you pass to a function. They let a parent component pass data to a child component and customize its appearance. For example, a Form can pass a color prop to a Button
  

**why do we use props**

- To customize a component's behavior.
- To reuse components with different data.
- To communicate between parent -> child components


**Important Points**

- Props are read-only inside the child.
- You can pass any type: sting, number, array, object, function.
- props allow component reuse with different content



# Naming convention into package.json file

- The name field in your package.json file should ideally **not contain any uppercase letters**. The widely accepted convention for npm package names is to use: 

- Lowercase letters.
- Hyphens (-) or underscores (_) to separate words.
- No spaces.

# What is state.
- a React component, start its name with an uppercase letter.
**To make the UI interactive, you need to let users change your underlying data model. You will use state for this.**
*Think of state as the minimal set of changing data that your app needs to remember. The most important principle for structuring state is to keep it DRY (Don’t Repeat Yourself). Figure out the absolute minimal representation of the state your application needs and compute everything else on-demand.*

## State: A Component's Memor
**Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.**
*State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.*

- Use a state variable when a component needs to “remember” some information between renders.
- State variables are declared by calling the useState Hook.
- Hooks are special functions that start with use. They let you “hook into” React features like state.
- Hooks might remind you of imports: they need to be called unconditionally. Calling Hooks, including useState, is only valid at the top level of a component or another Hook.
- The useState Hook returns a pair of values: the current state and the function to update it.
- You can have more than one state variable. Internally, React matches them up by their order.
- State is private to the component. If you render it in two places, each copy gets its own state.

# Event in React 
**an event is an action or occurrence that happens in the browser, which you can respond to.**  

Basically it is a action perform by user and our code base tackel that action and react according to that.  

like click dark mode button and the whole page became dark theme.  

Examples of Events:  

- Clicking a button → onClick
- Typing in an input → onChange
- Hovering over an element → onMouseOver
- Submitting a form → onSubmit
- Pressing a key → onKeyDown
  
```bash
function App() {
  const handleClick = () => {
    alert("Button was clicked!");
  }
  return <button onClick={handleClick}>Click me</button>
}

```

# Conditional rendering
In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX:

```bash
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
```

# 📋 1. What is a list and keys in React?
In React, a list is just when you render multiple elements/components dynamically using an array.

```bash
const fruits = ["Apple", "Banana", "Cherry"];

return (
  <ul>
    {fruits.map(fruit => (
      <li>{fruit}</li>
    ))}
  </ul>
);
```

-  We map over an array to create a list of JSX elements.
-  Each item becomes an <li> inside the <ul>.


# 💥 What are React Hooks?
- Hooks are special functions in React that let you use state, lifecycle features, and other React capabilities in functional components — without writing class components. 

- They were introduced in React 16.8 to make functional components much more powerful. 
- Hooks are special functions,that allow us to use **state** and other React Features in functional component.*React Hooks cannot be used directly in class components.*
- Earlier, When we used to create react app using Functional component,then we didn't have access to the state management and lifecycle method.
- In other words, Hooks are the functions that make functional components work like calss components.
- Hooks made react functional components so easy to use.
- Developer prefer functional component over class component.

### Benefits of React Hooks?
- React hooks simplify the code, improves the readability, reusability and overall performance of the application.
  
  
- **it is use to update data in UI**. Hooks give you control over state, behavior, data, and UI flow in React components. Hooks let you control how your app looks, behaves, and works with data — without writing class code.

- Hooks are functions in React that allow components to monitor and manage state and lifecycle features directly, without needing to use classes or manual intervention.


Before using any hooks please import that like
  
```bash
import { useState, useEffect } from 'react';
```


Some Hooks -> 
- useState → Manages local component state.
- useEffect → Runs side effects (like API calls, subscriptions, DOM updates).
- useContext → Shares and accesses global/context data across components.
- useRef → Holds a reference to a DOM element or stores persistent mutable values.
- useMemo → Caches computed values to avoid recalculating on every render.
- useCallback → Caches functions to prevent unnecessary re-creations on each render.
- useReducer → Handles complex state updates with a reducer pattern.


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



## My notes

useEffect hooks help perform side effect in our component.

Basically help us to deside lifecycle of our component.



**when we use useEffect without any dependency its runs infinite**

- empty array **[]** so it call callback function only one time. 
- **[input]** when even *input*(variable) change, it will call callback function again.also you can add multiple variable
   *input -> from App.jsx and it is a variable*



## useRef hook
- useRef is a React hook that gives you a persistent, mutable container whose .current value survives re-renders — but changing it does NOT trigger re-render.
**It’s often used to:**
- Keep a reference to a DOM element
- Store mutable values across renders without causing re-renders
- Track things like previous values or first render
- Avoiding recreating the ref contents

```bash
const refContainer = useRef(initialValue);
```
- initialValue → the initial value you want to store (can be null, a number, a string, an object, etc.)
- refContainer → an object that looks like { current: initialValue }

**By using a ref, you ensure that:**
- You can store information between re-renders (unlike regular variables, which reset on every render).
- Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
- The information is local to each copy of your component (unlike the variables outside, which are shared).
**useRef returns an object with a single property:**

- current: Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.



## 🔑 2. What are keys?
A key is a special attribute you must add when rendering lists.

```bash
<ul>
  {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))}
</ul>

```
- The key helps React identify which items have changed, been added, or removed.
- This improves performance and avoids bugs when the list updates.

## ⚠ Why keys are important
- Without keys → React will re-render everything blindly.
- With keys → React only updates the items that actually change.

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-


# Importants Points

**<React.StrictMode>** run code two times in developement first time to check and other in real.

**Types of Hooks**

- ✅ useState → Manages local component state.
- ✅ useEffect → Runs side effects (like API calls, subscriptions, DOM updates). 
- ✅ useContext → Shares and accesses global/context data across components. 
- ✅ useRef → Holds a reference to a DOM element or stores persistent mutable values. 
- ✅ useMemo → Caches computed values to avoid recalculating on every render.
- ✅ useCallback → Caches functions to prevent unnecessary re-creations on each render.
- ✅ useReducer → Handles complex state updates with a reducer pattern.

**Virtual DOM, Fibre and reconciliation**
```bash 
 https://github.com/acdlite/react-fiber-architecture
```
**React uses one-way data flow**
**Props are a way of passing data from parent to child.**
**State is reserved only for interactivity, that is, data that changes over time.**

# Props vs State
**Props** are used to pass data from parent component to a child component ensuring a unidirectional data flow of information.They are immutable and cann't be modify by the component that receives them.
**State** is used to manage data within a component. it is mutable and can updated using setState method. Changes in state trigger a re-render of component where the state is modified.


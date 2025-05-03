# Learn_react
Learning react from beginning 
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
# Babel Cdn

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

# Babel by npm</h5>

```bash
https://youtu.be/_ze46JgZpd4?si=H2J0p-lEC938Wec2 
https://youtu.be/zVWKtnEm4fk?si=0HdZOZvjK6G6XnB7
```


<h1>Create react by using create-react-app</h1>
it is too heavy its download everything related to react
    npx create-react-app <app-name>
    cd <app-name>
    npm run start
    npm run build // to build folder


## Bundler
A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser. A fantastic feature of a bundler is that it generates a dependency graph as it traverses your first code files. This implies that beginning with the entry point you specified, the module bundler keeps track of both your source files’ dependencies and third-party dependencies. This dependency graph guarantees that all source and associated code files are kept up to date and error-free. .
✅ Combines all .js / .jsx files .
✅ Converts JSX to plain JS (via Babel) .
✅ Transpiles modern JS (ES6+) to older JS (for browser support) .
✅ Optimizes (minifies) code for production .
✅ Optionally processes CSS, images, fonts, etc. 
✅ Steps to use a bundler.

Choose one (Webpack, Vite, Parcel, etc.).
Install it + its loaders/plugins .
Set up babel.config.js or .babelrc
Set up bundler config (webpack.config.js, vite.config.js) .
Add npm scripts .
Run npm start or npm run build .

# Types of bundler

# Webpack
Webpack is a module bundler — it takes all your project files (JavaScript, CSS, images, fonts, etc.), processes them, and bundles them into one or more optimized files that browsers can understand.

✅ Combines (bundles) your JS, CSS, images  .
✅ Transforms JSX → JS (via Babel)   .
✅ Transpiles ES6+ → ES5 (for browser support)   .
✅ Optimizes the final output (minifies, tree-shakes unused code)  .
✅ Provides a dev server with hot module reload (HMR)  .

# 🔨 How does Webpack work?
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

📦 Typical React + Webpack setup
entry: ./src/index.js
output: ./dist/bundle.js
loaders: babel-loader (JSX + ES6 → JS), css-loader + style-loader (CSS import support)
plugins: HtmlWebpackPlugin (injects your bundle into HTML)


# 💥 What is Parcel? 

Parcel is a zero-config bundler — it bundles your JavaScript, JSX, CSS, images, fonts, and more, with almost no manual configuration.

✅ Zero config → no need for webpack.config.js .
✅ Built-in Babel, TypeScript, PostCSS support .
✅ Hot Module Replacement (HMR) → updates the browser without full reload .
✅ Automatic code splitting & optimization .
✅ Fast dev server + optimized production build .

# 🔥 Why do React devs like Parcel?
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




# 💥 What is Vite? </h4>

Vite (pronounced like “vite” in French = “fast”) is a next-generation frontend build tool that gives you:

✅ ultra-fast dev server (instant startup).
✅ lightning-fast hot module replacement (HMR).
✅ ES module–based architecture.
✅ out-of-the-box React + JSX support.
✅ optimized production builds (using Rollup under the hood).

It was created by Evan You (the creator of Vue) and is now popular across React, Vue, Svelte, and even Vanilla JS projects.

# 🚀 Why React devs love Vite
- Instant dev server start → no matter how big your project
- Fast HMR → save a file, and the update appears instantly in the browser
- No config needed → React template works out of the box
- Built-in JSX + TypeScript support → no Babel setup required
- Optimized production builds → minified, tree-shaken, ready to deploy

# How to set up React + Vite.
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

 

## Virtual DOM, Fibre and reconciliation</h1>

reference ->
```bash 
 https://github.com/acdlite/react-fiber-architecture
```



## TailwindCss 4.0 in Vite

create react app by vite.
go to -> 
```bash
https://tailwindcss.com/docs/installation/using-vite 
```

bottom of installation tag you get a "using vite" named tag 
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


## 💥 What are props?
# "props" is default name;
- Props(short for properties) are inputs you pass from a parent component to a child component in React.
- They let you send data,values or functions into components so they can behave dynamically.

# why do we use props

- To customize a component's behavior.
- To reuse components with different data.
- To communicate between parent -> child components


# Important Points

- Props are read-only inside the child.
- You can pass any type: sting, number, array, object, function.
- props allow component reuse with different content


## Naming convention into package.json file

- The name field in your package.json file should ideally **not contain any uppercase letters**. The widely accepted convention for npm package names is to use: 

- Lowercase letters.
- Hyphens (-) or underscores (_) to separate words.
- No spaces.

## Comonents
 Components in React are reusable building blocks that control what you see in the UI.A component is a JavaScript function (or class) that returns React elements (JSX) to show something on the screen.

 # 🛠️ Types of components 


- Functional components → most common today (function MyComponent())
- Class components → older style (class MyComponent extends React.Component)


## 🔥 Why we use components:
- ✅ Reuse UI
- ✅ Keep code organized <br>
- ✅ Split big apps into small, testable parts <br>
- ✅ Pass data using props<br>
- ✅ Manage internal state (with hooks like useState) <br>

- a React component, start its name with an uppercase letter.



## 💥 What are React Hooks?
- Hooks are special functions in React that let you use state, lifecycle features, and other React capabilities in functional components — without writing class components. 

- They were introduced in React 16.8 to make functional components much more powerful. 

- it is use to update data in UI. Hooks give you control over state, behavior, data, and UI flow in React components. Hooks let you control how your app looks, behaves, and works with data — without writing class code.

Some Hooks -> 
- ✅ useState → Manages local component state.
- ✅ useEffect → Runs side effects (like API calls, subscriptions, DOM updates). 
- ✅ useContext → Shares and accesses global/context data across components. 
- ✅ useRef → Holds a reference to a DOM element or stores persistent mutable values. 
- ✅ useMemo → Caches computed values to avoid recalculating on every render.
- ✅ useCallback → Caches functions to prevent unnecessary re-creations on each render.
- ✅ useReducer → Handles complex state updates with a reducer pattern.


# UseState
- useState is a React Hook that lets you add state (data that can change) to a functional component.
- const [state, setState] = useState(initialValue);
- Every time you call setState, React:
- updates the value
- re-renders the component
- useState lets you add and manage data (state) in React functional components.
- Syntax → const [value, setValue] = useState(initialValue)
- You update the value using setValue, and React re-renders the component.
- Example → counter, form input, toggle, etc.
- It replaces the need for state in class components.
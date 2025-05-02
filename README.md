# Learn_react
Learning react from beginning 
<h1>What is React</h1>
<ul>
    <li>React is a JavaScript library to build dynamic and interactive user interfaces.</li>
    <li>Developed by facebook in 2011</li>
    <li>React only run on browser not work on server and client.</li>
    <li>Used to create single page website</li>
    <li>React is based on Declarative programming. basically you define the target UI state and then react figures out how to reach that state. But in JavaScript you have to write code to reach that desired state and JavaScript is based on Imperative Programming.</li>
</ul>

<h3>React Cdn</h3>
<ul>
<li><script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script></li>
<li>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</li>
</ul>



<h1>Babel</h1>
Babel is a JavaScript compiler. it convert new JavaScript into older JavaScript so it can support in all the browser and also convert JSX into Js. 
<h3>Babel Cdn</h3> <br>
    <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
    <br>
after attaching cdn 
<!-- Your custom script here -->
add into your script type-> <br>
    <script src="script.js" type="text/babel">

    Don't forget to use react cdn also

<h5>Babel by npm</h5>
<ul>
<li>https://youtu.be/_ze46JgZpd4?si=H2J0p-lEC938Wec2 </li>
<li>https://youtu.be/zVWKtnEm4fk?si=0HdZOZvjK6G6XnB7</li>


<h1>Create react by using create-react-app</h1>
it is too heavy its download everything related to react
    npx create-react-app <app-name>
    cd <app-name>
    npm run start
    npm run build // to build folder


<h1>Bundler</h1>
A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser. A fantastic feature of a bundler is that it generates a dependency graph as it traverses your first code files. This implies that beginning with the entry point you specified, the module bundler keeps track of both your source files’ dependencies and third-party dependencies. This dependency graph guarantees that all source and associated code files are kept up to date and error-free.
✅ Combines all .js / .jsx files <br>
✅ Converts JSX to plain JS (via Babel) <br>
✅ Transpiles modern JS (ES6+) to older JS (for browser support) <br>
✅ Optimizes (minifies) code for production <br>
✅ Optionally processes CSS, images, fonts, etc. <br>
✅ Steps to use a bundler

Choose one (Webpack, Vite, Parcel, etc.)
Install it + its loaders/plugins
Set up babel.config.js or .babelrc
Set up bundler config (webpack.config.js, vite.config.js)
Add npm scripts
Run npm start or npm run build

<h3>Types of bundler</h3>
<h5>Webpack</h5>
Webpack is a module bundler — it takes all your project files (JavaScript, CSS, images, fonts, etc.), processes them, and bundles them into one or more optimized files that browsers can understand.

✅ Combines (bundles) your JS, CSS, images  <br>
✅ Transforms JSX → JS (via Babel)   <br>
✅ Transpiles ES6+ → ES5 (for browser support)   <br>
✅ Optimizes the final output (minifies, tree-shakes unused code)  <br>
✅ Provides a dev server with hot module reload (HMR)  <br>

🔨 How does Webpack work?
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


<h5>💥 What is Parcel? </h5>

Parcel is a zero-config bundler — it bundles your JavaScript, JSX, CSS, images, fonts, and more, with almost no manual configuration.

✅ Zero config → no need for webpack.config.js <br>
✅ Built-in Babel, TypeScript, PostCSS support <br>
✅ Hot Module Replacement (HMR) → updates the browser without full reload <br>
✅ Automatic code splitting & optimization <br>
✅ Fast dev server + optimized production build <br>

🔥 Why do React devs like Parcel?
    It just works — you can start coding immediately.
    You don’t need to install Babel or Webpack manually — Parcel detects JSX and transpiles it.
    It handles assets automatically (images, CSS, fonts).
    It’s great for small to medium React projects or prototypes.

✅ How to set up React + Parcel <br>
Here’s a step-by-step guide:-> 

1️⃣ Create a new project

    mkdir my-parcel-app
    cd my-parcel-app
    npm init -y
    
2️⃣ Install React + ReactDOM
    npm install react react-dom
3️⃣ Install Parcel

npm install --save-dev parcel
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
        npm init -y
        create html and js file
        npm install react react-dom
        npm i --save-dev parcel
}




<h5>💥 What is Vite? </h5>

Vite (pronounced like “vite” in French = “fast”) is a next-generation frontend build tool that gives you:

✅ ultra-fast dev server (instant startup) <br>
✅ lightning-fast hot module replacement (HMR) <br>
✅ ES module–based architecture <br>
✅ out-of-the-box React + JSX support <br>
✅ optimized production builds (using Rollup under the hood) <br>

It was created by Evan You (the creator of Vue) and is now popular across React, Vue, Svelte, and even Vanilla JS projects. <br>

🚀 Why React devs love Vite <br>
    Instant dev server start → no matter how big your project
    Fast HMR → save a file, and the update appears instantly in the browser
    No config needed → React template works out of the box
    Built-in JSX + TypeScript support → no Babel setup required
    Optimized production builds → minified, tree-shaken, ready to deploy

✅ How to set up React + Vite <br>
    Here’s your step-by-step:

1️⃣ Create a new project

    npm create vite@latest my-vite-app
    It will prompt you:
        ✔ Project name: my-vite-app
        ✔ Select a framework: React
        ✔ Select a variant: JavaScript
2️⃣ Go into your project folder

    cd my-vite-app
3️⃣ Install dependencies

    npm install

4️⃣ Run the dev server
    npm run dev
    You’ll see:
    VITE vX.X.X  ready in XX ms
  ➜  Local:   http://localhost:5173/         <br>
5️⃣ Project structure

    /my-vite-app
    /public
    /src
        App.jsx
        main.jsx
    index.html
    package.json
    vite.config.js



<h1>💥 What are React Hooks?</h1>
Hooks are special functions in React that let you use state, lifecycle features, and other React capabilities in functional components — without writing class components. <br>

They were introduced in React 16.8 to make functional components much more powerful. <br>

it is use to update data in UI. Hooks give you control over state, behavior, data, and UI flow in React components. Hooks let you control how your app looks, behaves, and works with data — without writing class code.

Some Hooks -> <br>
✅ useState → Manages local component state. <br>
✅ useEffect → Runs side effects (like API calls, subscriptions, DOM updates). <br>
✅ useContext → Shares and accesses global/context data across components. <br>
✅ useRef → Holds a reference to a DOM element or stores persistent mutable values. <br>
✅ useMemo → Caches computed values to avoid recalculating on every render.<br>
✅ useCallback → Caches functions to prevent unnecessary re-creations on each render.<br>
✅ useReducer → Handles complex state updates with a reducer pattern.<br>



<h1>Virtual DOM, Fibre and reconciliation</h1>
reference -> https://github.com/acdlite/react-fiber-architecture



<h1> TailwindCss 4.0 in Vite</h1>
    create react app by vite
    go to -> https://tailwindcss.com/docs/installation/using-vite
    bottom of installation tag you get a "using vite" named tag 
        Install Tailwind CSS  Terminal ->  npm install tailwindcss @tailwindcss/vite
        Configure the Vite plugin
                open "vite.config.ts" file
                    replace with  -> 
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

    import into css file (index.css) ->  @import "tailwindcss";

    now you can run->  npm run dev

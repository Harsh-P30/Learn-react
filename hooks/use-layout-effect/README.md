# useLayoutEffect 
- useLayoutEffect is just like useEffect, but it runs synchronously before the browser paints the screen.
- It blocks the screen from updating until it finishes running.

**🛠️ When to Use useLayoutEffect**
- Use useLayoutEffect when:
  - You need to measure the layout (size, position) of a DOM element
  - You update the DOM and want it to happen before the screen shows anything
  - You need no flickering or glitches in UI


**⚠️ Warning**
  - Don’t overuse useLayoutEffect, as it blocks rendering — can make your app feel slow.
  - Use it only when you need exact layout control (DOM measurements, scroll sync, etc.).


**useLayoutEffect runs before the screen updates, useful when you need to measure or change the layout without flicker.**

## myNotes on useLayoutEffect hook
- useLayoutEffect works similarly to useEffect, but it is called before the User Interface gets mounted.
- useEffect gets called after the printing the DOM elements but useLayoutEffect gets called before printing the DOM elements.
  
# 📋 1. What is a list in React?
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

# 🔑 2. What are keys?
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
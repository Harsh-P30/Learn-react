
## useMemo Hooks

**useMemo** is a React Hook that memoizes (i.e., remembers) the result of a function, so that React doesn’t have to recalculate it every time the component re-renders — unless dependencies change.


**Why use useMemo**
- Performance Optimization
    - If you have an expensive calculation (like filtering a large list or computing a derived value), useMemo prevents re-running that calculation on every render unless the inputs actually change.
  
**Syntax**
```bash
const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);

```
**When NOT to use useMemo**
- For lightweight calculations, useMemo is unnecessary and can even make performance worse.

- Don't use it just to "optimize" everything — use it only for actual performance bottlenecks.


### myNotes on useMemo
- The react useMemo Hook returns a memorized value.(it's like caching a value so that it doesn't need to be recalculated.)
- useMemo only runs when one of its dependencies get updated.
- This can improve the performance of the application. There is one more hook in react to improve performance.that is useCallback hook.
- The useMemo hook and useCallback hooks are similar. the main difference is:
      - useMemo returns a memoized value.
      - useCallback returns a memoized function.
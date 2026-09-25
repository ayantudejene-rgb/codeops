# Profiling — Addis Eats

## Session 1: Before any fix

What I did: Opened React DevTools → Profiler, started recording,
clicked "Add to Cart" three times, then stopped recording.

Slowest component:

| Component | Render time |
|-----------|-------------|
|           |             |

Why it re-rendered: (fill in from the "Why did this render?" panel)

Fix applied: (e.g. moved a useState lower, wrapped a value in useMemo,
switched a consumer to a narrow Zustand selector)

## Session 2: After the fix

What I did: Same interaction as Session 1.

| Component | Render time |
|-----------|-------------|
|           |             |

Difference: (e.g. `Menu` no longer re-renders when the cart changes)

## What I did NOT memoise, and why

(e.g. `CategoryBar` is tiny; wrapping it in React.memo would add complexity
for no measurable gain. Removed from the codebase.)
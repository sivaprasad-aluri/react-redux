# Counter Redux

A simple Redux counter example demonstrating state management, actions, and reducers.

## Overview

This project shows how to build a counter application using Redux to manage global state.

## Features

- Increment counter
- Decrement counter
- Reset counter
- Display current count

## Installation

```bash
npm install redux react-redux
```

## Project Structure

```

```

app/
├── store.ts
├── hooks.ts
└── features/
└── counter/
├── counterSlice.ts
└── Counter.tsx

````

## Usage with Redux Toolkit

```javascript
// counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    reset: (state) => { state.value = 0; },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
````

```javascript
// store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: { counter: counterReducer },
});
```

```javascript
// Counter.tsx
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};
```

import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/counter/counterSlice";
import UserReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    users: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { combineReducers, configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import adminSlice from "../reducers/adminReducer";
import cartSlice from "../reducers/cartReducer";
import userReducer from "../reducers/userReducer";

const reducers = {
  user: userReducer,
  cart: cartSlice.reducer,
  admin: adminSlice.reducer,
};

const rootReducer = combineReducers({
  ...reducers,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

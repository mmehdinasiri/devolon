import {
  AnyAction,
  configureStore,
  EmptyObject,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import reducer from "./reducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: false,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type UseAppDispatchType = ThunkDispatch<EmptyObject, null, AnyAction> &
  ThunkDispatch<EmptyObject, undefined, AnyAction>;
export const useAppDispatch = (): UseAppDispatchType =>
  useDispatch<AppDispatch>();

"use client";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { store } from "./store";

persistStore(store); // persist the store

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

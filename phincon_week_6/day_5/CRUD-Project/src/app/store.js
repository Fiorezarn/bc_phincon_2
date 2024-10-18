import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productReducer from "../features/product/productSlice";
import productSaga from "../features/product/productSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

[productSaga].map((saga) => {
  sagaMiddleware.run(saga);
});

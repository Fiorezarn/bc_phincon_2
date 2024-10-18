import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    datas: null,
    databyid: null,
    code: null,
    message: null,
    loading: false,
    error: null,
    product: null,
  },
  reducers: {
    getProductRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getProductSucces: (state, action) => {
      state.loading = false;
      state.datas = action.payload;
    },
    getProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getProductByIdRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getProductByIdSucces: (state, action) => {
      state.loading = false;
      state.databyid = action.payload.product;
    },
    getProductByIdFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createProductRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    createProductSucces: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    createProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateProgramRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateProductSucces: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    updateProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteProductRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteProductSucces: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    deleteProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getProductRequest,
  getProductSucces,
  getProductFailure,
  getProductByIdRequest,
  getProductByIdSucces,
  getProductByIdFailure,
  createProductRequest,
  createProductSucces,
  createProductFailure,
  deleteProductRequest,
  deleteProductSucces,
  deleteProductFailure,
  updateProductRequest,
  updateProductSucces,
  updateProductFailure,
} = productSlice.actions;

export default productSlice.reducer;

import { put, takeLatest } from "redux-saga/effects";
import {
  getProductFailure,
  getProductSucces,
  createProductRequest,
  createProductSucces,
  createProductFailure,
  updateProductRequest,
  updateProductSucces,
  updateProductFailure,
  getProductByIdRequest,
  getProductByIdSucces,
  getProductByIdFailure,
} from "./productSlice";

const BASE_URL = import.meta.env.VITE_BASE_URL;

async function fetchData(url) {
  const response = await fetch(url);

  return await response.json();
}

function* getAllProduct() {
  try {
    const product = yield fetchData(`${BASE_URL}/product`);
    yield put(getProductSucces(product));
  } catch (error) {
    yield put(getProductFailure(error.message));
  }
}

function* getProductById(action) {
  try {
    const { id } = action.payload;
    const product = yield fetchData(`${BASE_URL}/product/${id}`);
    yield put(getProductByIdSucces(product));
  } catch (error) {
    yield put(getProductByIdFailure(error.message));
  }
}

function* createProduct(action) {
  try {
    const { name, price, stock, categoryId } = action.payload;
    const response = yield fetch(`${BASE_URL}/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        stock,
        categoryId,
      }),
    });
    const product = yield response.json();
    yield put(createProductSucces(product));
  } catch (error) {
    yield put(createProductFailure(error.message));
  }
}

function* deleteProduct(action) {
  try {
    const { id } = action.payload;
    const response = yield fetch(`${BASE_URL}/product/${id}`, {
      method: "DELETE",
    });
    yield response.json();
  } catch (error) {
    console.log(error);
  }
}

function* updateProduct(action) {
  try {
    const { id, name, price, stock, categoryId } = action.payload;
    const response = yield fetch(`${BASE_URL}/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        stock,
        categoryId,
      }),
    });
    const product = yield response.json();
    yield put(updateProductSucces(product));
  } catch (error) {
    yield put(updateProductFailure(error.message));
  }
}

export default function* productSaga() {
  yield takeLatest("GET_ALL_PRODUCT", getAllProduct);
  yield takeLatest("GET_PRODUCT_BY_ID", getProductById);
  yield takeLatest("CREATE_PRODUCT", createProduct);
  yield takeLatest("DELETE_PRODUCT", deleteProduct);
  yield takeLatest("UPDATE_PRODUCT", updateProduct);
}

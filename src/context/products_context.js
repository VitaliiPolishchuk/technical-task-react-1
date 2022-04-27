import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
  PRODUCT_MODAL_OPEN,
  PRODUCT_MODAL_CLOSE,
  PRODUCT_DELETE_MODAL_OPEN,
  PRODUCT_DELETE_MODAL_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

import { data } from "../seed";

const initialState = {
  isProductModalOpen: false,
  isProductDeleteModalOpen: false,
  idProductToDelete: null,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openProductModal = () => {
    dispatch({ type: PRODUCT_MODAL_OPEN });
  };
  const closeProductModal = () => {
    dispatch({ type: PRODUCT_MODAL_CLOSE });
  };

  const openProductDeleteModal = (id) => {
    dispatch({ type: PRODUCT_DELETE_MODAL_OPEN, payload: id });
  };
  const closeProductDeleteModal = () => {
    dispatch({ type: PRODUCT_DELETE_MODAL_CLOSE });
  };

  const addProduct = (product) => {
    localStorage.setItem(
      "products",
      JSON.stringify([...state.products, product])
    );
    fetchProducts();
  };

  const removeProduct = () => {
    const products = state.products.filter(
      (product) => product.id !== state.idProductToDelete
    );
    localStorage.setItem("products", JSON.stringify(products));
    fetchProducts();
  };

  const updateProduct = (product) => {
    const products = state.products.filter((p) => p.id !== product.id);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    fetchSingleProduct(product.id);
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      // const response = await axios.get(url);
      let products = JSON.parse(localStorage.getItem("products"));
      if (!products) {
        products = data;
        localStorage.setItem("products", JSON.stringify(products));
      }
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  const fetchSingleProduct = async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    let products = JSON.parse(localStorage.getItem("products"));
    try {
      const singleProduct = products.filter(
        (product) => product.id.toString() === id.toString()
      )[0];
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openProductModal,
        closeProductModal,
        openProductDeleteModal,
        closeProductDeleteModal,
        addProduct,
        removeProduct,
        updateProduct,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};

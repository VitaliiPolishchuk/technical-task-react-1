import React from "react";
import { useProductsContext } from "../context/products_context";

const ProductDeleteButton = ({ id }) => {
  const { openProductDeleteModal } = useProductsContext();
  return (
    <button onClick={() => openProductDeleteModal(id)}>RemoveProduct</button>
  );
};

export default ProductDeleteButton;

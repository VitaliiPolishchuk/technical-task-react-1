import React, { useState } from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";

const ProductDeleteModal = ({ id }) => {
  const {
    closeProductDeleteModal,
    isProductDeleteModalOpen: isOpen,
    removeProduct,
  } = useProductsContext();

  const handleSubmit = () => {
    removeProduct(id);
    closeProductDeleteModal();
  };

  return (
    <Wrapper isOpen={isOpen}>
      <div className="modal">
        <p>Do you really want to delete product?</p>
        <button onClick={() => handleSubmit()}>Yes</button>
        <button onClick={() => closeProductDeleteModal()}>No</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    z-index: 100;
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }
`;

export default ProductDeleteModal;

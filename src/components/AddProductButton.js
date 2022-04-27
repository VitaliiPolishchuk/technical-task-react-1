import React, { useState } from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";

const AddProductButton = () => {
  const { openProductModal } = useProductsContext();

  return (
    <Wrapper>
      <button onClick={() => openProductModal()}>addProduct</button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default AddProductButton;

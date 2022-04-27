import React, { useState } from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";

const EditProductButton = () => {
  const { openProductModal } = useProductsContext();

  return (
    <Wrapper>
      <button onClick={() => openProductModal()}>Edit Button</button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default EditProductButton;

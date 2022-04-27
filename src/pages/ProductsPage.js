import React from "react";
import styled from "styled-components";
import {
  Filters,
  ProductList,
  Sort,
  PageHero,
  ProductModal,
  ProductDeleteModal,
  AddProductButton,
} from "../components";
import { useProductsContext } from "../context/products_context";

const product = {
  id: "",
  imageUrl: "",
  name: "",
  count: "",
  size: {
    height: "",
    width: "",
  },
  weight: "",
};

const ProductsPage = () => {
  const { addProduct } = useProductsContext();

  return (
    <main>
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <AddProductButton />
            <ProductList />
          </div>
        </div>
        <ProductModal
          inputProduct={product}
          submitButtonText="Add product"
          addOrUpdate={addProduct}
        />
        <ProductDeleteModal />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;

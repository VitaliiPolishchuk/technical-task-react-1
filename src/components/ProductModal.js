import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";

const ProductModal = ({
  inputProduct,
  submitButtonText,
  addOrUpdate,
  isUpdate,
}) => {
  const { closeProductModal, isProductModalOpen: isOpen } =
    useProductsContext();
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(inputProduct);

  const handleSubmit = () => {
    let error = null;
    if (
      product.id === "" ||
      product.imageUrl === "" ||
      product.name === "" ||
      product.count === "" ||
      product.size.width === "" ||
      product.size.height === "" ||
      product.weight === ""
    ) {
      error = "Any input fields cant be empty";
    }
    setError(error);
    if (!error) {
      addOrUpdate(product);
      closeProductModal();
    }
  };

  return (
    <Wrapper isOpen={isOpen}>
      <div className="modal">
        <div className="field">
          <label className="labes">id</label>
          <input
            type="text"
            className="input"
            value={product.id}
            onChange={(e) =>
              setProduct((prevState) => {
                return { ...prevState, id: e.target.value };
              })
            }
            disabled={isUpdate}
          />
        </div>
        <div className="field">
          <label className="labes">imageUrl</label>
          <input
            type="text"
            className="input"
            value={product.imageUrl}
            onChange={(e) =>
              setProduct((prevState) => {
                return { ...prevState, imageUrl: e.target.value };
              })
            }
          />
        </div>
        <div className="field">
          <label className="labes">name</label>
          <input
            type="text"
            className="input"
            value={product.name}
            onChange={(e) =>
              setProduct((prevState) => {
                return { ...prevState, name: e.target.value };
              })
            }
          />
        </div>
        <div className="field">
          <label className="labes">count</label>
          <input
            type="text"
            className="input"
            value={product.count}
            onChange={(e) =>
              setProduct((prevState) => {
                return { ...prevState, count: e.target.value };
              })
            }
          />
        </div>
        <div className="field">
          <label className="labes">width</label>
          <input
            type="text"
            className="input"
            value={product.size.width}
            onChange={(e) =>
              setProduct((prevState) => {
                return {
                  ...prevState,
                  size: {
                    height: prevState.size.height,
                    width: e.target.value,
                  },
                };
              })
            }
          />
        </div>
        <div className="field">
          <label className="labes">height</label>
          <input
            type="text"
            className="input"
            value={product.size.height}
            onChange={(e) =>
              setProduct((prevState) => {
                return {
                  ...prevState,
                  size: { width: prevState.size.width, height: e.target.value },
                };
              })
            }
          />
        </div>
        <div className="field">
          <label className="labes">weight</label>
          <input
            type="text"
            className="input"
            value={product.weight}
            onChange={(e) =>
              setProduct((prevState) => {
                return { ...prevState, weight: e.target.value };
              })
            }
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button onClick={() => handleSubmit()}>{submitButtonText}</button>
        <button onClick={() => closeProductModal()}>Cancel</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    z-index: 100;
    transform: translate(-50%, -50%);
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }
`;

export default ProductModal;

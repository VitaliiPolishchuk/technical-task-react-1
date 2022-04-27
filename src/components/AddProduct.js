import React, { useState } from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";

const AddProduct = () => {
  const {
    isSidebarOpen: isOpen,
    openSidebar,
    closeSidebar,
    addProduct,
  } = useProductsContext();
  const [error, setError] = useState(null);
  const [product, setProduct] = useState({
    id: "",
    imageUrl: "",
    name: "",
    count: "",
    width: "",
    height: "",
    weight: "",
  });

  const handleSubmit = () => {
    let error = null;
    if (
      product.id === "" ||
      product.imageUrl === "" ||
      product.name === "" ||
      product.count === "" ||
      product.width === "" ||
      product.height === "" ||
      product.weight === ""
    ) {
      error = "Any input fields cant be empty";
    }
    setError(error);
    if (!error) {
      addProduct(product);
    }
  };

  return (
    <Wrapper isOpen={isOpen}>
      <button onClick={openSidebar}>addProduct</button>
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
            value={product.inamed}
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
            value={product.width}
            onChange={(e) =>
              setProduct((prevState) => {
                return { ...prevState, width: e.target.value };
              })
            }
          />
        </div>
        <div className="field">
          <label className="labes">height</label>
          <input
            type="text"
            className="input"
            value={product.height}
            onChange={(e) =>
              setProduct((prevState) => {
                return { ...prevState, height: e.target.value };
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
        <button onClick={() => handleSubmit()}>Submit</button>
        <button onClick={() => closeSidebar()}>Cancel</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    z-index: 100;
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }
`;

export default AddProduct;

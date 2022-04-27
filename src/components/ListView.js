import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductDeleteButton from "./ProductDeleteButton";
import ProductDeleteModal from "./ProductDeleteModal";
const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, imageUrl, name, price, description } = product;
        return (
          <article key={id}>
            <img src={imageUrl} alt={name} />
            <div>
              <h4>{name}</h4>
              {/* <h5 className='price'>{formatPrice(price)}</h5> */}
              {/* <p>{description.substring(0, 150)}...</p> */}
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
              <ProductDeleteButton id={id} />
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;

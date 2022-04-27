import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  Stars,
  PageHero,
  EditProductButton,
  ProductModal,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
    updateProduct,
  } = useProductsContext();
  useEffect(() => {
    fetchSingleProduct(id);
    // eslint-disable-next-line
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const { productId, name, count, imageUrl, stock, size, weight, comments } =
    product;
  let width = null;
  let height = null;
  if (size) {
    width = size.width;
    height = size.height;
  }
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <div className="buttons">
          <Link to="/" className="btn">
            back to products
          </Link>
          <EditProductButton />
        </div>

        <div className="product-center">
          <img src={imageUrl} alt="" className="main " />
          <section className="content">
            <h2>{name}</h2>
            <p className="info">
              <span>Count :</span>
              {count}
            </p>
            <p className="info">
              <span>Width :</span>
              {width}
            </p>
            <p className="info">
              <span>Height :</span>
              {height}
            </p>
            <p className="info">
              <span>Weight :</span>
              {weight}
            </p>
            <hr />
            {/* {stock > 0 && <AddToCart product={product} />} */}
          </section>
        </div>
      </div>
      <div className="section section-center comments"></div>

      {product?.size?.width && (
        <ProductModal
          inputProduct={product}
          submitButtonText="Edit product"
          addOrUpdate={updateProduct}
          isUpdate={true}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .main {
    height: 400px;
    width: auto;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;

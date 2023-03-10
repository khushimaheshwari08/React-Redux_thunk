import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./styles/Container";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import PageNavigation from "./components/PageNavigation";
import FormatPrice from "./Helpers/FormatPrice";
import MyImage from "./components/MyImage";
import AddToCart from "./components/AddToCart";

const SingleProduct = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.singleProductAction(id);
  }, [id]);

  return (
    <Wrapper>
      <PageNavigation
        title={
          props.singleProductResponse ? props.singleProductResponse.name : ""
        }
      />
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product-images">
            <MyImage
              imgs={
                props.singleProductResponse
                  ? props.singleProductResponse.image
                  : ""
              }
            />
          </div>
          <div className="product-data">
            <h2>
              {props.singleProductResponse
                ? props.singleProductResponse.name
                : ""}
            </h2>
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice
                  price={
                    props.singleProductResponse
                      ? props.singleProductResponse.price + 250000
                      : ""
                  }
                />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the day:
              <FormatPrice
                price={
                  props.singleProductResponse
                    ? props.singleProductResponse.price
                    : ""
                }
              />
            </p>
            <p>
              {props.singleProductResponse
                ? props.singleProductResponse.description
                : ""}
            </p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Delivery</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 year warranty</p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Available:
                <span>
                  {props.singleProductResponse
                    ? props.singleProductResponse.stock > 0
                      ? "In Stock"
                      : "Not available"
                    : ""}
                </span>
              </p>
              <p>
                ID: <span>{id}</span>
              </p>
              <p>
                Brand:
                <span>
                  {props.singleProductResponse
                    ? props.singleProductResponse.company
                    : ""}
                </span>
              </p>
            </div>
            <hr />
            {props.singleProductResponse &&
            props.singleProductResponse.stock > 0 ? (
              <AddToCart />
            ) : (
              ""
            )}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product-images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;

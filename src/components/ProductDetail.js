import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const getProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    getProductDetails();

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div className="p-5"> Loading...</div>
      ) : (
        <section style={{ backgroundColor: "#eee", padding: "0 50px" }}>
          <div class="container py-5">
            <div class="row justify-content-center">
              <div class="col-md-8 col-lg-6 col-xl-4">
                <div class="card text-black p-4">
                  <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt="Apple Computer"
                  />
                  <div class="card-body">
                    <div class="text-center">
                      <h5 class="card-title">{product.title}</h5>
                      <p class="text-muted mb-4">{product.description}</p>
                    </div>

                    <div class="d-flex justify-content-between total font-weight-bold mt-4">
                      <span>Category:</span>
                      <span>{product.category}</span>
                    </div>
                    <div class="d-flex justify-content-between total font-weight-bold mt-4">
                      <span>Price</span>
                      <span>${product.price}</span>
                    </div>
                    <div class="d-flex justify-content-between total font-weight-bold mt-4">
                      <span>Reviews</span>
                      <span>{product?.rating?.count}</span>
                    </div>
                    <div class="d-flex justify-content-between total font-weight-bold mt-4">
                      <span>Rating</span>
                      <span>{product?.rating?.rate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;

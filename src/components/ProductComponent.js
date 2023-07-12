import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderedList = products.map((product) => {
    return (
      <div className="col-md-3 my-5" key={product.id}>
        <div className="card p-5 h-100 border">
          <div className="h-50">
            <img
              className="card-img-top h-100"
              src={product.image}
              alt="Card image cap"
            />
          </div>
          <div className="card-body mt-2">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">${product.price}</p>
            <p className="card-text">{product.category}</p>
            <Link to={`/product/${product.id}`}>
              <a className="btn btn-dark">See Details</a>
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return <div className="row">{renderedList}</div>;
};

export default ProductComponent;

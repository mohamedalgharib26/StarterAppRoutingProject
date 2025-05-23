import { Link } from "react-router";
import AddToCartBtn from "./AddToCartBtn";

function Product({ product: { title, price, image, id } }) {
  const product = { title, price, image, id };
  return (
    <div>
      <div className="col mb-5">
        <div className="card h-60">
          <div
            className="badge bg-dark text-white position-absolute"
            style={{
              top: "0.5rem",
              right: "0.5rem",
            }}
          >
            Sale
          </div>

          <img
            className="card-img-top mt-2"
            src={image}
            alt="..."
            height={"260px"}
          />

          <div className="card-body p-4">
            <div className="text-center">
              <Link to={`/product/${id}`}>
                <h5 className="fw-bolder">{title}</h5>
              </Link>

              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
              </div>
              {price}
            </div>
          </div>

          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <AddToCartBtn product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

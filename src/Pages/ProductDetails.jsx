import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const fetchData = async () => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setProducts(data);
    //   });

    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={product.image}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder">{product.title}</h1>
              <div className="fs-5 mb-5">
                <span>{`$ ${product.price}`}</span>
              </div>
              <p className="lead">{product.description}</p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  style={{ maxWidth: "3rem" }}
                />
                {/* value="1"
                 */}
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;

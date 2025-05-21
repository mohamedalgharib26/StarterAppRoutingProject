import { useEffect, useState } from "react";
import Product from "./Product";
import Loader from "./Loader";

function ProductList() {
  const [Products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {isLoading ? (
              <Loader />
            ) : (
              Products.map((el) => <Product key={el.id} product={el} />)
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductList;

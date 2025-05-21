import { useEffect, useState } from "react";
import Product from "./Product";

function ProductList() {
  const [Products, setProducts] = useState([]);

  const fetchData = async () => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setProducts(data);
    //   });

    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {Products.map((el) => (
              <Product key={el.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductList;

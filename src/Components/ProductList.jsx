import Product from "./Product";

function ProductList() {
  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {[1, 2, 3, 4, 5].map((el) => (
              <Product />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductList;

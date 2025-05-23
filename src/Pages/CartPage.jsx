import { useContext, useState } from "react";
import { cartContext } from "../Context/CartContext";

function CartPage() {
  const { cart, ClearCart, removeFromCart, saveToLocalStorage, setCart } =
    useContext(cartContext);
  const clearCart = () => {
    ClearCart();
  };

  const [quantity, setQuantity] = useState(0);

  return (
    <div className="container">
      <div className="row mt-2">
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <button className="btn btn-dark m-2 " onClick={clearCart}>
            Clear cart
          </button>
        </div>
        {cart.length < 1 ? (
          <p className="text-center text-danger ">
            {" "}
            Cart Is empty please add Products{" "}
          </p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"> Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((element, index) => {
                return (
                  <tr key={element.id}>
                    <th>{index + 1}</th>
                    <td>{element.title}</td>

                    <td>{element.price}</td>
                    <td>
                      <input
                        className="form-control text-center me-3"
                        id="inputQuantity"
                        type="number"
                        style={{ maxWidth: "5rem" }}
                        value={quantity ? quantity : element.quantity}
                        onChange={(e) => {
                          setCart(
                            cart.map((cartItem) => {
                              return cartItem.id === element.id
                                ? {
                                    ...cartItem,
                                    quantity: +e.target.value,
                                  }
                                : cartItem;
                            })
                          );
                          saveToLocalStorage();
                        }}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(element)}
                      >
                        Delete{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default CartPage;

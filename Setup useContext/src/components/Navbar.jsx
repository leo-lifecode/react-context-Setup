import { useContext } from "react";
import { contextCart } from "../App";

function Navbar() {
  const NameCart = useContext(contextCart);
  const cart = NameCart.cart;
  const setCart = NameCart.setcart;

  //console cart
  console.log(cart);

  const handleaddtocart = (id) => {
    setCart([...cart, { id: 1, qty: 1 }]);
  };

  return (
    <div>
      <div>navbar</div>
      <button onClick={() => handleaddtocart(0)}>+ add to cart</button>
      <button onClick={() => handleaddtocart(1)}>+ add to cart</button>
    </div>
  );
}

export default Navbar;

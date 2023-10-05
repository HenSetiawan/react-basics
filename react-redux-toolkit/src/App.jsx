import { Container } from "react-bootstrap";
import Nav from "./component/Nav";
import ListProduct from "./component/ListProduct";
import CartItem from "./component/CartItem";
import getAllProducts from "./services/product";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const productsCart = useSelector((state) => state.cart.value);
  const [products, setProducts] = useState([]);
  const [isCartShowEd, setIsCartShowEd] = useState(false);

  const handleGetProducts = async () => {
    const dataProducts = await getAllProducts();
    setProducts(dataProducts);
  };

  const handleShowCart = () => {
    setIsCartShowEd((showed) => (showed = !showed));
    document.body.classList.toggle("hidden");
  };

  useEffect(() => {
    handleGetProducts();
    console.log(productsCart);
  }, []);
  return (
    <>
      <Nav handleShowCart={handleShowCart}></Nav>
      <ListProduct products={products} />

      <div className={`cart-container ${isCartShowEd ? "d-blocl" : "d-none"} `}>
        <div className="cart-layer"></div>
        <div className="cart-content">
          <Container className="p-4">
            <div className="head d-flex justify-content-between">
              <h3>Cart</h3>
              <button
                onClick={handleShowCart}
                className="p-3 btn-close"
              ></button>
            </div>
            {productsCart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;

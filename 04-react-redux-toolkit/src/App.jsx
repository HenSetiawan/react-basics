import { Container, Row, Col } from "react-bootstrap";
import Nav from "./component/Nav";
import ListProduct from "./component/ListProduct";
import CartItem from "./component/CartItem";
import getAllProducts from "./services/product";
import { deleteAll } from "./redux/reducer/cartSlice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";
import "./App.css";

function App() {
  const dispatch = useDispatch();
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
          <Container className="shadow-sm cart-head">
            <div className="head d-flex justify-content-between p-3">
              <h3>Cart</h3>
              <button
                onClick={handleShowCart}
                className="p-3 btn-close"
              ></button>
            </div>
          </Container>
          <Container className="cart-list">
            {productsCart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </Container>
          <Container className="cart-footer">
            <Row className="p-3">
              <Col>
                <button
                  onClick={() => dispatch(deleteAll())}
                  className="btn btn-outline-danger d-flex align-items-center"
                >
                  <BsTrash />
                  <span>Delete All</span>
                </button>
              </Col>
              <Col>
                <button className="btn btn-success">
                  <span>Purchase</span>
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <footer className="p-2 text-center">
          <p>Copyright Fake Store 2023 | Hendy S</p>
      </footer>
    </>
  );
}

export default App;
